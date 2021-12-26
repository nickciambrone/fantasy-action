import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import lineupReducer from './lineup/lineup.reducer';
import actionReducer from './action/action.reducer';
import userReducer from './user/user.reducer';

const persistConfig={
    key:'root',
    storage,
    whitelist:['lineup', 'action', 'user']
}

const rootReducer = combineReducers({
    lineup:lineupReducer,
    action:actionReducer,
    user:userReducer
  
})

export default persistReducer(persistConfig, rootReducer)