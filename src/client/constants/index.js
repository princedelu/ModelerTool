import keymirror from 'keymirror'

export default {

  API_BASE_URL : 'http://localhost:8080/api/',
  API_PATH_LOGIN : 'login',

  ACTIONS: keymirror({
    LOGIN_SUCESS: null,
    LOGIN_FAIL: null,
    LOGOUT_SUCESS: null
  })
}
