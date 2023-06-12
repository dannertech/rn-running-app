
import createDataContext from './createDataContext';

const initialState = {
    recording: false,
    locations: [],
    currentLocation: null,
    name: "",
}


const locationReducer = (state, action) => {
    switch(action.type){
        case 'add_current_location':
            return {
                ...state,
                currentLocation: action.payload
            }
        case 'start_recording':
            return {
                ...state,
                recording: true
            }
        case 'stop_recording':
            return {
                ...state,
                recording: false
            }
        case 'add_location':
            return {
                ...state,
                locations: [...state.locations, action.payload]
            }
        case 'change_name':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
};

const changeName = (dispatch) => {
    return (name) => {
        dispatch({type: 'change_name', payload: name})
    }
}

const startRecording = dispatch => {
    return () => {
        dispatch({type: 'start_recording'})
    }
};

const stopRecording = dispatch => {
    return () => {
        dispatch({type: 'stop_recording'})
    }
};

const addLocation = dispatch => {
    return (location, recording) => {
        console.log(location);
        dispatch({type: 'add_current_location', payload: location});
        if(recording){
            dispatch({type: 'add_location', payload: location})
        }
    }
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    initialState,
    {
        addLocation,
        stopRecording,
        startRecording,
        changeName
        
    }
    );