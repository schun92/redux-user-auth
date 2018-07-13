import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function createAccount(userInfo){
    return async (dispatch) => {
       const resp = await axios.post(`${BASE_URL}/signup`, userInfo);

       console.log('Sign Up Response:', resp)
    }
}

export function signIn(){
    return { type: types.SIGN_IN };
}

export function signOut(){
    return { type: types.SIGN_OUT};
}