import React from 'react';
import Head from 'next/head';
import Button from '@components/Button';
import { useRouter } from 'next/router';

function Error() {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>404</title>
            </Head>
            <p>요청하신 페이지가 없습니다!</p>
            <Button onClick={() => router.back()}>돌아가기</Button>
        </div>
    );
}

export default Error;
