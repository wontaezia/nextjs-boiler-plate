import React from 'react';
import { css } from '@emotion/react';
import Header from '@layout/Header';
import { flex } from '@styles/theme';

function Layout({ children }: any) {
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
