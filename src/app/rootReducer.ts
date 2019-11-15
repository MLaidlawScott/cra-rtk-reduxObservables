import { combineReducers } from 'redux-starter-kit';

import counterReducer from '../slices/counter';

const rootReducer = combineReducers({
    counter: counterReducer,
})

export default rootReducer;