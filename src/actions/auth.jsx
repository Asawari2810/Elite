import React,{Component} from 'react';
import {auth} from '../constants/Auth.constants.jsx';
import axios from 'axios';

export function loginUser (values,history){

   
    return(dispatch) => {
        dispatch({type : auth.REGISTER_USER})
        const credentials ={
            phone_number : values.loginEmail,
            password : values.loginPassword
        }

        console.log(credentials);

        axios.post("http://localhost:4000/login",credentials).then(response => {
            dispatch(registerUserSuccess(response.data))
            history.push('dashboard');
            console.log(response);
            console.log("dispatch done");
        }).catch(error => {
            console.log("inside catch");
            console.log(error)
        })
    }

}

export function signUp (values, history){
    return(disptach) =>{
        disptach({type : auth.REGISTER_USER})
        const credentials = {
            firstName: values.firstName,
            lastName: values.lastName,
            signUpEmail: values.signUpEmail,
            password: values.password,
            confirmPassword: values.confirmPassword
        }

        axios.post("http://localhost:4000/login",credentials).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error)
        })
    }
}

export function registerUserSuccess(user) {
    return{
        type : auth.REGISTER_USER_SUCCESS,
        payload : {user}
    }
}

export function registerUserFailure(error) {
    return{
        type : auth.REGISTER_USER_FAILURE,
        payload : {error}
    }
}