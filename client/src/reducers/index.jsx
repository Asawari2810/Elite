import {combineReducers} from 'redux';
import  reducer from './reducer_auth.jsx'
import groupsReducer from './reducer_groups';
import modalReducer from './reducer_modalPaper';
import adminReducer from '../admin/admin.reducer';

const indexReducer = combineReducers ({
    user : reducer,
    groups: groupsReducer,
    modal: modalReducer,
    admin: adminReducer
})

export default indexReducer;