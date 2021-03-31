import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios, { AxiosResponse } from 'axios';
import { TODOS_API as API } from '@api/config';
import { useTodos } from '@hooks';
import TodoTemplate from '@components/TodoTemplate';

function Todo({ id, data }: any) {
    const { todo } = useTodos(id);

    return (
        <div>
            <Head>
                <title>Todo {id}</title>
            </Head>
            <TodoTemplate todo={data || todo} />
        </div>
    );
}

export default Todo;

// getInitialProps은 페이지 렌더링 시에 모든 요청을 처리함

Todo.getInitialProps = async ({ req, asPath }: any) => {
    // req는 SSR 방식으로 동작할 때만 값이 전해지기 때문에 이를 이용하여 데이터 예외 처리
    const id = Number(asPath.split('/')[2]);

    if (req) {
        const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
        return {
            id,
            data: data[0],
        };
    }

    // CSR 방식일 때
    return {
        id,
    };
};
