import { GetServerSideProps } from 'next';
import Head from 'next/head';

type SSRTestProps = {
    isClient: boolean;
};

function SSRTest({ isClient }: SSRTestProps) {
    return (
        <div>
            <Head>
                <title>SSR Test</title>
            </Head>
            <p>{isClient ? 'client' : 'server'}에서 실행되었습니다.</p>
        </div>
    );
}

export default SSRTest;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const isClient = !req || req.url?.startsWith('/_next/data');

    return {
        props: {
            isClient,
        },
    };
};
