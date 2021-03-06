import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './src/reducers';

const middleWare = applyMiddleware(ReduxThunk);
const store = createStore(rootReducer, middleWare);

export default store;