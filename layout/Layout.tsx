import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { useTodos } from '@hooks';
import Header from '@layout/Header';
import { flex } from '@styles/theme';

function Layout({ children, isClient }: any) {
    const { getTodos } = useTodos();
    // 빠른 초기의 렌더링을 위해 사전에 데이터를 내려받지 않고
    // 모든 API통신을 렌더링 후 동작하도록 했습니다.
    useEffect(() => {
        if (!isClient) {
            getTodos({ start: 0, limit: 10 });
        }
    }, [isClient]);

    return (
        <>
            <Header />
            <div css={container}>{children}</div>
        </>
    );
}

export default Layout;

const container = css`
    ${flex('center', 'flex-start', 'column')}
    padding: 30px 100px 60px;
`;
