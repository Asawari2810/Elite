import { auth } from '../constants/Auth.constants.jsx';
import { API_ROOT, URI } from '../config/config';
import { StringFormat } from '../utils/StringFormat';

export const register = (values, history) => {
    return (dispatch) => {
        dispatch({ type: auth.REGISTRATION_LOADING })
        fetch(API_ROOT + URI.REGISTRATION, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(res => {
            console.log("res----", res)
            if(res.status === 200) {
                history.push('/mailsent');
            } else {
                alert("server error")
            }
        })
        .catch(err => {
            dispatch({
                type: auth.REGISTRATION_FAILURE,
                payload: err
            })
        })
    }
}


export function loginUser (values,history) {
    return(dispatch) => {
        dispatch({type : auth.LOGIN_LOADING})
        fetch(API_ROOT + URI.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(data => {
            if(data.id) {
                dispatch({
                    type: auth.LOGIN_SUCCESS,
                    payload: data
                })
                localStorage.setItem('user',JSON.stringify(data));
                if(data.role === 'admin') {
                    history.push('/admin/users');
                } else {
                    if(data.isProfile === true){
                        history.push('/feeds');
                    } 
                    else history.push('/dashboard');
                }
            } else {
                dispatch({
                    type: auth.LOGIN_FAILURE,
                    payload: data.msg
                })
                alert(data.msg)
            }
            
        })
        .catch(err => {
            dispatch({
                type: auth.LOGIN_FAILURE,
                payload: err
            })
        })

    }

}

export const activateUser = (id) => {
    fetch(StringFormat(API_ROOT + URI.ACTIVATE_USER, id), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(res => res.json())
    .then(data => {
        console.log("data", data)
    })
    .catch(err => {
        console.log("error-", err)
    })
}

export function logout(){
    localStorage.clear();
    //history.push('main');
    window.location="/login";
}