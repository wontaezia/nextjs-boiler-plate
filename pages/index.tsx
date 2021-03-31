import React from 'react';
import Head from 'next/head';
import { data as Test } from 'testData.json';

function Main() {
    return (
        <div>
            <Head>
                <meta name="keywords" content="home,test,nextjsKeywords" />
                <title>Home</title>
            </Head>
            {Test.map((data) => (
                <div key={data.id}>{data.title}</div>
            ))}
        </div>
    );
}

export default Main;
