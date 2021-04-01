import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { useTodos } from '@hooks';
import Header from '@layout/Header';
import { flex } from '@styles/theme';

function Layout({ children, isClient }: any) {
    const { getTodos } = useTodos();
    // 화면에는 그려지지만 모든 API통신은 뒤에서 동작하도록?
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
