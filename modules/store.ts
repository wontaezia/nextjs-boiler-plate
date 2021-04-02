import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '@modules/rootSlice';
import rootWatcher from '@modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true, // 개발 모드에서는 true로 값을 지정하여 devTools을 사용하고 실제 배포 시에는 false로 변경합니다.
});

sagaMiddleware.run(rootWatcher);

declare global {
    type Store = typeof store;
    type AppDispatch = typeof store.dispatch;
    type GetState = typeof store.getState;
}

export default store;
