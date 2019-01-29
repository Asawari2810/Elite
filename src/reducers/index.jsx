import {combineReducers} from 'redux';
import  reducer from './reducer_auth.jsx'


const indexReducer = combineReducers ({
    user : reducer
})

export default indexReducer;