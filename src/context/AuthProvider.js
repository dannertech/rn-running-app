import createDataContext from "./createDataContext";



const authReducer = (state, action) => {
    switch(ActionSheetIOS.type){
        default:
            return state;
    }
};



export const {Context, Provider} = createDataContext(
    authReducer,
    {},
    {isSignedIn: false}
)