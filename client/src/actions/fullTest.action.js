import { fullTests } from '../constants/FullTest.constants';
import { API_ROOT, URI } from '../config/config';
import { StringFormat } from '../utils/StringFormat';

export const fetchFullTest = (test_id, history) => {
    localStorage.setItem('token', "abc");
    console.log("inside action"+test_id);
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: fullTests.FULLTEST_QUESTIONS_LOADING })
            fetch(StringFormat(API_ROOT + URI.FULL_TEST_QUESTIONS, test_id), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'token': token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log("full test data", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: fullTests.FULLTEST_QUESTIONS_SUCCESS,
                    payload: data.questions
                })
            })
            .catch(err => {
                console.log("error in Full test");
                dispatch({
                    type: fullTests.FULLTEST_QUESTIONS_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}