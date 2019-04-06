import { fullTests } from '../constants/FullTest.constants';

const initialState = {
    fullTestDetails: [],
    fullTestLoading: false,
    fullTestError: null,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){

    case fullTests.FULLTEST_QUESTIONS_LOADING: 
        return { ...state, fullTestLoading: true }
    case fullTests.FULLTEST_QUESTIONS_SUCCESS:
        return { ...state, fullTestDetails: action.payload, fullTestLoading: false }
    case fullTests.FULLTEST_QUESTIONS_FAILURE: 
        return { ...state, fullTestDetails: [], fullTestError: action.payload, fullTestLoading: false }
    default :
        return state
    }  
};

export default reducer;