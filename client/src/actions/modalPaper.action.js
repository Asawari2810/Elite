import { modal } from '../constants/ModalPaper.constants';
import { API_ROOT, URI } from '../config/config';
import { StringFormat } from '../utils/StringFormat';

export const fetchModalPaperList = (subject_id, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: modal.MODAL_LIST_LOADING })
            fetch(StringFormat(API_ROOT + URI.MODAL_LIST, subject_id), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'token': token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log("modal dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: modal.MODAL_LIST_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: modal.MODAL_LIST_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}