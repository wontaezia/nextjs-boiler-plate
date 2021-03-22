import React from 'react'
import Header from '@layout/Header';

function Layout({children}: any) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout;