import React from 'react';
import { css } from '@emotion/react';
import { Todos } from '@modules/todos/slice';

function TodoTemplate({ todo }: { todo: Todos }) {
    const { id, title, userId, completed } = todo;

    return (
        <ul css={container}>
            <li>id: {id}</li>
            <li>title: {title}</li>
            <li>userId: {userId}</li>
            <li>completed: {String(completed)}</li>
        </ul>
    );
}

export default TodoTemplate;

const container = css`
    font-size: 14px;

    li + li {
        margin-top: 10px;
    }
`;
