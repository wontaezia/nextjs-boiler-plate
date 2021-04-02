import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { colors, flex } from '@styles/theme';

function Header() {
    const router = useRouter();
    const { pathname } = router;

    return (
        <nav
            css={[
                nav,
                css`
                    a[href='${pathname}'] {
                        color: ${colors.green};
                        border-bottom: 3px solid ${colors.green};
                    }
                `,
            ]}
        >
            <Link href="/">
                <a>home</a>
            </Link>
            <Link href="/todos">
                <a>todos</a>
            </Link>
            <Link href="/ssr-test">
                <a>ssr-test</a>
            </Link>
            <Link href="/ssg-test">
                <a>ssg-test</a>
            </Link>
            <Link href="/result">
                <a>result</a>
            </Link>
        </nav>
    );
}

export default Header;

const nav = css`
    ${flex('flex-start', 'center')}
    padding-left: 100px;
    padding-top: 14px;

    a {
        padding: 20px 16px 10px;
        color: ${colors.greys.placeholder};
    }
`;
