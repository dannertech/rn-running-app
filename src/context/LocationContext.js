
import createDataContext from './createDataContext';

const initialState = {
    recording: false,
    locations: [],
    currentLocation: null
}


const locationReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
};

const startRecording = dispatch => {
    return () => {

    }
};

const stopRecording = dispatch => {
    return () => {

    }
};

const addLocation = dispatch => {
    return () => {

    }
};

const {Context, Provider} = createDataContext(
    locationReducer,
    initialState,
    {
        addLocation,
        stopRecording,
        startRecording,
        
    }
    );