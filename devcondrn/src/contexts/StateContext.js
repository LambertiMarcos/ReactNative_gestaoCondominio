// Criação do contexto geral

import React, { createContext, useContext, useReducer } from 'react';

import UseReducer from '../reducers/UserReducer';

const initialState = {
  user: UseReducer()
}

const MainReducer = (state, action) => ({
  user: UseReducer(state.user, action)
});

export const StateContext = createContext();

export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
      <StateProvider value={[state, dispatch]}>
        {children}
      </StateProvider>
  )
}

export const useStateValue = () => useContext(StateContext);