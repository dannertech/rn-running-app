import React, {createContext, useReducer} from 'react';

export default (reducer, initialState, actions) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //attach dispatch to actions in an object
    const bindActions = {};

    for(const [key,value] of Object.entries(actions)){
        bindActions[key] = actions[key](dispatch)
    }

    const Context = createContext();

    const Provider = ({children}) => {
        return(
            <Context.Provider value={{...bindActions, state}}>
                {children}
            </Context.Provider>
        )
    }
    return {Context, Provider};
};

