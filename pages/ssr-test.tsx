import React from 'react';

function SSRTest({ req }: { users: any[]; req: string }) {
    return <p>{req} 에서 실행되었습니다.</p>;
}

SSRTest.getInitialProps = async ({ req }: any) => {
    return {
        req: req ? 'server' : 'client',
    };
};

export default SSRTest;
