import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { useTodos } from '@hooks';
import SEO from '@components/SEO';
import TodoList from '@components/TodoList';
import Button from '@components/Button';
import Alert from '@components/Alert';

function Todos() {
    const { todos, isLoading, error, getTodos, cancelTodos, isSuccess } = useTodos();
    const [start, setStart] = useState(todos.length);
    const limit = 10;

    // useEffect는 리턴되는 클린 업 함수에서 이전의 클로저를 가지고 있기 때문에
    // unmount 시에 최신의 상태로 업데이트된 값을 외부에서 전달하기 위해 useRef를 사용했습니다.
    const currentLoadState = useRef(isLoading);

    useEffect(() => {
        if (!todos.length) {
            getTodos({ start, limit });
        }

        // 데이터 요청 도중 페이지를 이탈하면 요청을 중단합니다.
        return () => {
            if (currentLoadState.current) {
                cancelTodos();
            }
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        currentLoadState.current = isLoading;
    }, [isLoading]);

    useEffect(() => {
        setStart(todos.length);
    }, [todos]);

    const handleTodosData = () => {
        if (isLoading) return; // 중복 호출을 방지합니다.
        getTodos({ start: todos.length, limit });
    };

    const cancelAsync = () => {
        if (!isLoading) return; // 데이터를 요청하고 있지 않다면 아무것도 실행하지 않습니다.
        cancelTodos();
    };

    // 기본 페이지
    return (
        <div>
            <SEO />
            <Alert error={error} isLoading={isLoading} isSuccess={isSuccess} children={isLoading ? '데이터를 불러오는 중입니다' : '데이터 요청 성공'} />
            <div css={mainTitle}>TodoList</div>
            <div css={buttonContainer}>
                <Button children="데이터 불러오기" theme="primary" onClick={handleTodosData} />
                <Button children="요청 취소" theme="secondary" onClick={cancelAsync} />
            </div>
            <TodoList todos={todos} />
        </div>
    );
}

export default Todos;

const mainTitle = css`
    font-size: 20px;
    margin: 0 0 30px;
`;

const buttonContainer = css`
    margin-bottom: 20px;

    button + button {
        margin-left: 10px;
    }
`;
