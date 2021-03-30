import React from 'react';
import Head from 'next/head';

function Error() {
    return (
        <div>
            <Head>
                <title>404</title>
            </Head>
            <p>요청하신 페이지가 없습니다!</p>
        </div>
    );
}

export default Error;
