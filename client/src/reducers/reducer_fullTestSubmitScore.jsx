import { fullTestSubmitScore } from '../constants/FullTestSubmitScore.constants';

const initialState = {
    ffullTestSubmitScoreDetails: "",
    fullTestSubmitScoreLoading: false,
    fullTestSubmitScoreError: null,
    fullTestQuestionsResult : []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){

    case fullTestSubmitScore.FULLTEST_SUBMITSCORE_LOADING: 
        return { ...state, fullTestSubmitScoreLoading: true }
    case fullTestSubmitScore.FULLTEST_SUBMITSCORE_SUCCESS:
        return { ...state, ffullTestSubmitScoreDetails: action.payload, fullTestSubmitScoreLoading: false }
    case fullTestSubmitScore.FULLTEST_SUBMITSCORE_FAILURE: 
        return { ...state, ffullTestSubmitScoreDetails: [], fullTestSubmitScoreError: action.payload, fullTestSubmitScoreLoading: false }
    case fullTestSubmitScore.FULL_TEST_QUESTIONS_RESULT: 
        return { ...state, fullTestQuestionsResult: action.payload,fullTestSubmitScoreLoading: false}
    default :
        return state
    }  
};

export default reducer;