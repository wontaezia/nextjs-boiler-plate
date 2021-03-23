import React from 'react';
import { css } from '@emotion/react';
import { Todos } from '@modules/todos/slice';
import { useToggleTodo } from '@hooks';
import { colors } from '@styles/theme';

function TodoList({ todos }: { todos: Todos[] }) {
    const { toggleClicked } = useToggleTodo();

    return (
        <ul css={todosContainer}>
            {todos.map((todo) => {
                const { id, title, completed } = todo;
                return (
                    <li key={id} onClick={() => toggleClicked({ id, todo })}>
                        <h3
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
        cursor: pointer;
    }
`;

const todoStyle = css`
    font-size: 14px;

    &::before {
        content: '';
        display: inline-block;
        padding: 4px;
        margin-right: 10px;
        border-radius: 50%;
    }
`;
