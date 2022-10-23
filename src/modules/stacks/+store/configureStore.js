import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './RootSaga';
import mainReducer from './Main/Main.reducer';

const configureStore = () => {
  const rootReducer = combineReducers({
    main: mainReducer,
  });
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(RootSaga);
  return store;
};
export default configureStore;
