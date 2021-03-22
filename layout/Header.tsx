import Link  from 'next/link'
import { css } from '@emotion/react'

function Header() {
    return (
        <div css={s_header}>
            <Link href="/">홈</Link>
            <Link href="/about">소개</Link>
            <Link href="/ssr-test">SSR 테스트</Link>
        </div>
    )
}

export default Header

const s_header = css`
    display: flex;
    justify-content: center;
    align-items: center;

    a + a {
        margin-left: 14px
    }
`