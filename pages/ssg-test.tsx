import { GetStaticProps } from 'next';
import Head from 'next/head';
import axios, { AxiosResponse } from 'axios';
import { TODOS_API as API } from '@api/config';
import { Todos } from '@modules/todos/slice';

type SSGTestProps = {
    data: Todos;
};

function SSRTest({ data }: SSGTestProps) {
    return (
        <div>
            <Head>
                <title>SSG Test</title>
            </Head>
            <p>
                {data.id}, {data.title}
            </p>
        </div>
    );
}

export default SSRTest;

export const getStaticProps: GetStaticProps = async (context) => {
    const id = 1;
    const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
    return {
        props: {
            data: data[0],
        },
    };
};
