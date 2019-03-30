import {combineReducers} from 'redux';
import  reducer from './reducer_auth.jsx'
import groupsReducer from './reducer_groups';

const indexReducer = combineReducers ({
    user : reducer,
    groups: groupsReducer
})

export default indexReducer;