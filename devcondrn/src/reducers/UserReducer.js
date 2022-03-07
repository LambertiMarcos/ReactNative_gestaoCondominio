// Reducer do usuário

import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: '',
  user: {},
  propety:{}
}

export default (state = initialState, action = {}) => {

  switch(action.type){
    case 'setToken':
      AsyncStorage.setItem('token', action.payload.token); // salvar o token
      return {...state, token: action.payload.token};

    case 'setUser':
      return {...state, user: action.payload.user};

    case 'setPropety':
      return {...state, propety: action.payload.propety};
  }

  return state;
};