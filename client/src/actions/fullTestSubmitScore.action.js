import { fullTestSubmitScore } from '../constants/FullTestSubmitScore.constants';
import { API_ROOT, URI } from '../config/config';
import { StringFormat } from '../utils/StringFormat';

export const fetchFullTestSubmitScore = (subject_id,test_number,score,selectedAnswers,history) => {
    localStorage.setItem('token', "abc");
    console.log("inside fetch0"+selectedAnswers);
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({type : fullTestSubmitScore.FULL_TEST_QUESTIONS_RESULT, payload : selectedAnswers} )
            dispatch({ type: fullTestSubmitScore.FULLTEST_SUBMITSCORE_LOADING })
            fetch(StringFormat(API_ROOT + URI.FULL_TEST_SUBMIT_SCORE), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'token': token
            },
           // body : JSON.stringify(subject_id,test_number,score)
           body : JSON.stringify(
            {
                subject_id: subject_id,
                test_number: test_number,
                score: score
               }
           ) 
            })
            .then(res => res.json())
            .then(data => {
                console.log("score result", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: fullTestSubmitScore.FULLTEST_SUBMITSCORE_SUCCESS ,
                    payload: data
                })
            })
            .catch(err => {
                console.log("error in Full test");
                dispatch({
                    type: fullTestSubmitScore.FULLTEST_SUBMITSCORE_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}