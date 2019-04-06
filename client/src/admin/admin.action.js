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

export const addCourse = (values, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.ADD_COURSE_LOADING })
            fetch(StringFormat(API_ROOT + URI.ADD_COURSE), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'token': token
            },
            body: JSON.stringify(values)
            })
            .then(res => res.json())
            .then(data => {
                console.log("course dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.ADD_COURSE_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.ADD_COURSE_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}

export const fetchGroups = (course_id, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.GROUPS_LOADING })
            fetch(StringFormat(API_ROOT + URI.GROUPS), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'token': token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log("groups dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.GROUPS_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.GROUPS_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}

export const addGroup = (values, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.ADD_GROUP_LOADING })
            fetch(StringFormat(API_ROOT + URI.GROUPS), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'token': token
            },
            body: JSON.stringify(values)
            })
            .then(res => res.json())
            .then(data => {
                console.log("ADD GROUP  dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.ADD_GROUP_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.ADD_GROUP_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}

export const fetchSubjects = (group_id, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.SUBJECTS_LOADING })
            fetch(StringFormat(API_ROOT + URI.SUBJECTS), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'token': token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log("groups dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.SUBJECTS_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.SUBJECTS_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}

export const addSubject = (values, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.ADD_SUBJECT_LOADING })
            fetch(StringFormat(API_ROOT + URI.SUBJECTS), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'token': token
            },
            body: JSON.stringify(values)
            })
            .then(res => res.json())
            .then(data => {
                console.log("ADD SUBJECT  dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.ADD_SUBJECT_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.ADD_SUBJECT_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}

export const fetchChapters = (subject_id, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.CHAPTERS_LOADING })
            fetch(StringFormat(API_ROOT + URI.FETCH_CHAPTERS, subject_id), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'token': token
            },
            })
            .then(res => res.json())
            .then(data => {
                console.log("groups dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.CHAPTERS_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.CHAPTERS_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}

export const addChapter = (values, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.ADD_CHAPTER_LOADING })
            fetch(StringFormat(API_ROOT + URI.CHAPTERS), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'token': token
            },
            body: JSON.stringify(values)
            })
            .then(res => res.json())
            .then(data => {
                console.log("ADD SUBJECT  dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.ADD_CHAPTER_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.ADD_CHAPTER_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}

export const uploadFile = (subjectId, chapterId, values, history) => {
    localStorage.setItem('token', "abc");
    //let token = JSON.parse(localStorage.getItem('user')).token;
    let token = localStorage.getItem('token');
    console.log(token,"token");
    //let id = JSON.parse(localStorage.getItem('user')).id
    console.log("token---", token)
    return (dispatch) => {
        if(token!=null) {
            dispatch({ type: admin.UPLOAD_QUESTIONS_FILE_LOADING })
            fetch(StringFormat(API_ROOT + URI.UPLOAD, subjectId, chapterId), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'token': token
            },
            body: JSON.stringify(values)
            })
            .then(res => res.json())
            .then(data => {
                console.log("ADD SUBJECT  dta", data);
                // if(data.detail === 'Signature has expired.') {
                //     dispatch({
                //         type: collection.MY_COLLECTION_FAILURE,
                //         payload: data
                //     })
                //      return history.push('/login')
                // }
                dispatch({
                    type: admin.UPLOAD_QUESTIONS_FILE_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: admin.UPLOAD_QUESTIONS_FILE_FAILURE,
                    payload: err
                })
            })
        } else{
            history.push('/login');
        }
    }
}