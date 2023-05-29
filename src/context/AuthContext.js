import createDataContext from "./createDataContext";



const authReducer = (state, action) => {
    switch(ActionSheetIOS.type){
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({email, password}) => {
        dispatch({type:,payload: email, password})
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
    {signup, 
    signin,
    signout},
    {isSignedIn: false}
)