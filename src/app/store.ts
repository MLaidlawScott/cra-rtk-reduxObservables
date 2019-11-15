import { configureStore, applyMiddleware, getDefaultMiddleware } from 'redux-starter-kit';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from '../epics';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), epicMiddleware]
});

epicMiddleware.run(rootEpic);

export default store;
