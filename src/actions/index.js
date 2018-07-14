import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function createAccount(userInfo){
    return async (dispatch) => {
       try {
           const resp = await axios.post(`${BASE_URL}/signup`, userInfo);

           localStorage.setItem('token', resp.data.token)

           dispatch({ type: types.SIGN_UP});

       }catch(err){
           console.log('sign up error:', err.message)
       }
    }
}

export function accountSignIn(userInfo){
    return async dispatch => { 
        try{
            const resp = await axios.post(`${BASE_URL}/signin`, userInfo)
            console.log('Sign In:', resp.data.token);

            localStorage.setItem('token', resp.data.token)

            dispatch({ type: types.SIGN_IN});
        }catch(err){
            console.log('Error Signing In:', err.message);
        }
    };
}

export function signOut(){

    localStorage.removeItem('token');

    return { type: types.SIGN_OUT };
}

export function getMovieQuote(){
    return async dispatch => {
        try {
            const axiosConfig = {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            }
            const resp = await axios.get(BASE_URL, axiosConfig);

            console.log('resp:',resp);

            dispatch({
                type: types.GET_MOVIE_QUOTE,
                quote: resp.data.message
            })
        }catch(err){
            console.log('Get quote error:', err.message);

            
        }
    }
}