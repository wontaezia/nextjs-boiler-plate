import React from 'react';
import Head from 'next/head';
import { data as Test } from 'testData.json';
import Button from '@components/Button';
import useUsers from '@hooks/useUsers';
function Main() {
    const { data, error } = useUsers();
    console.log(data);
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            {Test.map((data) => (
                <div key={data.id}>{data.title}</div>
            ))}
        </div>
    );
}

export default Main;
