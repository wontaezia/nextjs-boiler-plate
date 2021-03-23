import { put, delay, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { todosActions, Todos } from '@modules/todos/slice';
import { TODOS_API as API } from '@api/config';
import { PayloadAction } from '@reduxjs/toolkit';

const { cancelTodosAsync } = todosActions;

export function* getTodosAsync(action: PayloadAction<any>) {
    const { payload } = action;

    try {
        if (action.type === cancelTodosAsync.type) {
            // 취소 액션이 실행되었다면 에러를 전달해 해당 API 요청을 중단합니다.
            throw new Error('요청을 취소합니다');
        }

        const responseForTodos: AxiosResponse = yield call(() =>
            axios.get(`${API}?_start=${payload.start}&_limit=${payload.limit}`)
        );
        const todosData = responseForTodos.data;

        if (!todosData.length) {
            throw new Error('불러올 추가 데이터가 없습니다');
        }

        yield delay(2000); // API 통신 delay가 생겼을 때를 위한 장치
        yield put(todosActions.getTodosSuccessAsync(todosData));
    } catch (e) {
        yield put(todosActions.getTodosFailedAsync(e.message));
    }
}

export function* toggleTodoAsync(action: PayloadAction<{ id: number; todo: Todos }>) {
    const { payload } = action;

    try {
        const response: AxiosResponse = yield call(() =>
            axios.put(`${API}/${payload.id}`, {
                ...payload.todo,
                completed: !payload.todo.completed,
            })
        );
        yield put(todosActions.toggleTodoSuccessAsync(response.data));
    } catch (e) {
        yield put(todosActions.toggleTodoFailedAsync(e.message));
    }
}
