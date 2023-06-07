import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            }
        case 'signin':
            return {
                errorMessage: "",
                token: action.payload
            }
        case 'clear_error_message':
            return {
                state,
                errorMessage: ""
            }
        case 'signout':
            return {
                errorMessage: '',
                token: null
            }
        default:
            return state;
    }
};

const tryLocalSignin =  (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
}

const clearErrorMessage = (dispatch) => () => {
    console.log("here")
    dispatch({type: 'clear_error_message'});
    
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        //dispatch({type:,payload: email, password})
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token})

            navigate('TrackList');
        } catch (error) {
            dispatch({type: 'add_error', payload: "Something went wrong"})
        }
    }
};

const signin = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});

            navigate('TrackList');
        } catch(error){
            console.log(error);
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong'
            })
        }
    }
};

const signout = dispatch => {
    return async() => {
        //sign out
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('loginFlow');
    }
}



export const {Context, Provider} = createDataContext(
    authReducer,
    {token: null, errorMessage: ""},
    {signup, signin,signout, clearErrorMessage, tryLocalSignin},
)