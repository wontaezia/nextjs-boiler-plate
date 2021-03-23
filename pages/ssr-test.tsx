import React from 'react';
import Head from 'next/head';

function SSRTest({ req }: { users: any[]; req: string }) {
    return (
        <>
            <Head>
                <title>SSR Test</title>
            </Head>
            <p>{req} 에서 실행되었습니다.</p>
        </>
    );
}

SSRTest.getInitialProps = async ({ req }: any) => {
    return {
        req: req ? 'server' : 'client',
    };
};

export default SSRTest;
