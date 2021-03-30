import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks';
import { todosActions } from '@modules/todos/slice';

function useTodos(id?:string | string[] | undefined) {
    const dispatch: AppDispatch = useDispatch();
    const { todos, isLoading, isSuccess, error } = useTypedSelector((state) => {
        const {
            todosReducers: { todos, isLoading, isSuccess, error },
        } = state;

        return {
            todos,
            isLoading,
            isSuccess,
            error,
        };
    });

    let todo;
    
    if(id) todo = todos[Number(id) - 1]

    const getTodos = useCallback(
        ({ start, limit }) => dispatch(todosActions.getTodos({ start, limit })),
        [dispatch]
    );
    const cancelTodos = useCallback(() => dispatch(todosActions.cancelTodosAsync('cancel')), [
        dispatch,
    ]);

    return {
        todo,
        todos,
        isLoading,
        isSuccess,
        error,
        getTodos,
        cancelTodos,
    };
}

export default useTodos;
