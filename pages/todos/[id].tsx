import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios, { AxiosResponse } from 'axios';
import { TODOS_API as API } from '@api/config';
import { css } from '@emotion/react';
import { useTodos } from '@hooks';

function Todo({ req, id, data }: any) {
    const { todo } = useTodos(id);

    if (req) {
        const { id, title, userId, completed } = data;

        return (
            <div>
                <Head>
                    <title>Todo {id}</title>
                </Head>
                <ul css={container}>
                    <li>id: {id}</li>
                    <li>title: {title}</li>
                    <li>userId: {userId}</li>
                    <li>completed: {String(completed)}</li>
                </ul>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>Todo {todo?.id}</title>
            </Head>
            <ul css={container}>
                <li>id: {todo?.id}</li>
                <li>title: {todo?.title}</li>
                <li>userId: {todo?.userId}</li>
                <li>completed: {String(todo?.completed)}</li>
            </ul>
        </div>
    );
}

export default Todo;

Todo.getInitialProps = async ({ req, asPath }: any) => {
    // pathname : /todos/[id]
    // asPath : /todos/1 혹은 /todos/2 ...

    const id = Number(asPath.split('/')[2]);

    if (req) {
        const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
        return {
            req: 'server',
            id,
            data: data[0],
        };
    }

    return {
        id,
    };
};

const container = css`
    font-size: 14px;

    li + li {
        margin-top: 10px;
    }
`;
