import React, {createContext, useReducer} from 'react';

export default (reducer, initialState, actions) => {
    
    const Context = createContext();

    const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //attach dispatch to actions in an object
    const bindActions = {};

    for(let key in actions){
        bindActions[key] = actions[key](dispatch)
    }

        return(
            <Context.Provider value={{...bindActions, state}}>
                {children}
            </Context.Provider>
        )
    }
    return {Context, Provider};
};

