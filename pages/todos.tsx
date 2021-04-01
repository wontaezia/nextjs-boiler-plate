import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { useTodos } from '@hooks';
import SEO from '@components/SEO';
import TodoList from '@components/TodoList';
import Button from '@components/Button';
import Alert from '@components/Alert';

function Todos() {
    const { todos, isLoading, isSuccess, error, getTodos, cancelTodos } = useTodos();
    const limit = 10;

    // useEffect는 리턴되는 클린 업 함수에서 이전의 클로저를 가지고 있기 때문에
    // unmount 시에 최신의 상태로 업데이트된 값을 외부에서 전달하기 위해 useRef를 사용했습니다.
    const currentLoadState = useRef(isLoading);

    // 페이지 mount시에 데이터가 비어있다면 새로운 데이터를 받아옵니다.
    useEffect(() => {
        if (!todos.length) {
            getTodos({ start: 0, limit });
        }

        // 데이터 요청이 완료되지 않은 시점에 페이지를 이탈하게 되면 해당 요청을 중단합니다.
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

    const handleTodosData = () => {
        getTodos({ start: todos.length, limit });
    };

    const cancelAsync = () => {
        if (!isLoading) return; // 데이터를 요청하고 있지 않다면 아무것도 실행하지 않습니다.
        cancelTodos();
    };

    // 기본 페이지
    return (
        <div>
            <SEO title="" desc="" canonical="" image="" icon="" keywords="" />
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
