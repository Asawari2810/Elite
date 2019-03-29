import {auth} from '../constants/Auth.constants.jsx';

const initialState = {
    userDetails : []
}

const reducer = (state = initialState,action) =>{
    switch(action.type){

        case auth.REGISTER_USER :
        return{...state}

        case auth.REGISTER_USER_SUCCESS :
        return {...state, userDetails:action.payload.user }

        default :
        return state
    }  
};

export default reducer;