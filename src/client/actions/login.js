import axios from 'axios';
import constants from '../constants'
import { push } from 'react-router-redux';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8080/api' : '/api';

export function login(props) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/login`
  });

  return {
    type: constants.ACTIONS.POST_LOGIN,
    payload: request
  };
}

export function loginSuccess(jwt) {
  return {
    type: constants.ACTIONS.POST_LOGIN_SUCCESS,
    jwt: jwt
  };
}

export function loginFailure(error) {
  return {
    type: constants.ACTIONS.POST_LOGIN_FAILURE,
    payload: error
  };
}

export function logout(props) {
  return function(dispatch){
			localStorage.removeItem('jwt');
			dispatch(push('/login'));
      dispatch(logoutSuccess);
    };
}

export function logoutSuccess() {
  return {
    type: constants.ACTIONS.DELETE_LOGOUT_SUCCESS
  };
}
