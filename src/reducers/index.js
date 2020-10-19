import { combineReducers } from 'redux'

import getChatReducer  from './getChatReducer';
import getNewStatusReducer from './getNewStatusReducer';
import getViewStatusReducer from './getViewStatusReducer';
import getProfileReducer from './getProfileReducer';

const rootReducer = combineReducers({
    chat : getChatReducer,
    status : getNewStatusReducer,
    viewed : getViewStatusReducer,
    profile : getProfileReducer
})

export default rootReducer;