import React from 'react';
import Head from 'next/head';
import { data } from 'testData.json';
import Button from '@components/Button';

function Main() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            {data.map((data) => (
                <div key={data.id}>{data.title}</div>
            ))}
            <Button children="데이터 불러오기" theme="primary" />
        </>
    );
}

export default Main;
