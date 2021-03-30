import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { Todos } from '@modules/todos/slice';
import { useToggleTodo } from '@hooks';
import Button from '@components/Button';
import { colors } from '@styles/theme';

function TodoList({ todos }: { todos: Todos[] }) {
    const { toggleClicked } = useToggleTodo();
    const router = useRouter();

    return (
        <ul css={todosContainer}>
            {todos.map((todo) => {
                const { id, title, completed } = todo;
                return (
                    <li key={id}>
                        <h3
                            onClick={() => toggleClicked({ id, todo })}
                            css={[
                                todoStyle,
                                css`
                                    &::before {
                                        background-color: ${completed ? colors.green : colors.greys.placeholder};
                                    }
                                `,
                            ]}
                        >
                            {title}
                        </h3>
                        <Button
                            children="자세히 보기"
                            theme="tertiary"
                            size="small"
                            custom={css`
                                margin-left: 6px;
                                margin-top: 4px;
                            `}
                            onClick={() => router.push(`/todos/${id}`)}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;

const todosContainer = css`
    li {
        margin: 10px 0;
    }
`;

const todoStyle = css`
    font-size: 14px;
    cursor: pointer;

    &::before {
        content: '';
        display: inline-block;
        padding: 4px;
        margin-right: 10px;
        border-radius: 50%;
    }
`;
