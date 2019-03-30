import { admin } from './admin.constants';
import { API_ROOT, URI } from '../config/config';
import { StringFormat } from '../utils/StringFormat';

export const fetchCourses = (history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.COURSES_LOADING })
            fetch(StringFormat(API_ROOT + URI.GET_COURSES), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'token': token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log("admin dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.COURSES_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.COURSES_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}