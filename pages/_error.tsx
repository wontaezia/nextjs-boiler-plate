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

// error 페이지 접근 시에 index 페이지로 자동 리다이렉트를 해주는 방법
Error.getInitialProps = () => {
    return {
        // returns a redirect to an internal page `/another-page`
        redirect: {
            destination: '/',
            permanent: false,
        },
    };
};
