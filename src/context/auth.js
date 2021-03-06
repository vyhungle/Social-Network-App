import React, {useReducer, createContext} from 'react';
import {
  deleteAccess,
  getAccessToken,
  getAccessUser,
  setAccessToken,
} from '../utils/storage';

const initialState = {
  user: null,
};

const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  async function login(userData) {
    await setAccessToken(userData.token, userData);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  }

  async function logout() {
    await deleteAccess();
    dispatch({type: 'LOGOUT'});
  }

  React.useEffect(() => {
    setTimeout(async () => {
      let userData;
      userData = null;
      try {
        userData = await getAccessUser();
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGIN', payload: userData});
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider
      value={{user: state.user, login, logout}}
      {...props}
    />
  );
}

export {AuthContext, AuthProvider};
