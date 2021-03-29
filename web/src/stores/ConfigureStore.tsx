import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './RootReducer';
import { rootSaga } from './RootSaga';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    }
};
