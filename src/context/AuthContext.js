import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        //dispatch({type:,payload: email, password})
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
        } catch (error) {
            dispatch({type: 'add_error', payload: "Something went wrong"})
        }
    }
};

const signin = (dispatch) => {
    return ({email, password}) => {

    }
};

const signout = () => {
    return () => {
        //sign out
    }
}



export const {Context, Provider} = createDataContext(
    authReducer,
    {isSignedIn: false, errorMessage: ""},
    {signup, signin,signout},
)