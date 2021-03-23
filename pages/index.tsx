import React from 'react';
import Head from 'next/head';
import { data } from 'testData.json';

function Main() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            {data.map((data) => (
                <div key={data.id}>{data.title}</div>
            ))}
        </>
    );
}

export default Main;
