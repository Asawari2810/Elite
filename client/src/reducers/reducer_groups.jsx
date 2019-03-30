import {groups} from '../constants/Groups.constants';

const initialState = {
    groupsDetails: [],
    groupsLoading: false,
    groupsError: null,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){

    case groups.GROUPS_LOADING: 
        return { ...state, groupsLoading: true }
    case groups.GROUPS_SUCCESS:
        return { ...state, groupsDetails: action.payload, groupsLoading: false }
    case groups.GROUPS_FAILURE: 
        return { ...state, groupsDetails: [], groupsError: action.payload, groupsLoading: false }


        default :
        return state
    }  
};

export default reducer;