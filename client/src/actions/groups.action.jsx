import { groups } from '../constants/Groups.constants';
import { API_ROOT, URI } from '../config/config';
import { StringFormat } from '../utils/StringFormat';

export const fetchGroups = (course_id, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: groups.GROUPS_LOADING })
            fetch(StringFormat(API_ROOT + URI.GROUPS, course_id), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'token': token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log("groups dta", data);
                dispatch({
                    type: groups.GROUPS_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: groups.GROUPS_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}