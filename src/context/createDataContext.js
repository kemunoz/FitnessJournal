import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context = React.createContext();


    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundactions = {};

        for (let key in actions) {
            boundactions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundactions }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
};