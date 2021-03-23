import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from '@modules/todos/slice';

function useToggleTodo() {
    const dispatch: AppDispatch = useDispatch();
    const toggleClicked = useCallback(
        ({ id, todo }) => dispatch(todosActions.toggleClicked({ id, todo })),
        [dispatch]
    );

    return {
        toggleClicked,
    };
}

export default useToggleTodo;
