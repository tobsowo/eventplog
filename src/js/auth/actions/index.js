import cookie from 'js-cookie'
import processRequest from '../../utils/webAPI'

export const fakeAuth = {
  isLoggedIn: true,
  currentUser: {},
  authenticate(cb) {
    this.isLoggedIn = true;
    this.currentUser = {
      name: 'Kent Beck'
    }
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isLoggedIn = false
    this.currentUser = {}
    setTimeout(cb, 100)
  }
}

export const Auth = {
  isLoggedIn: Boolean(cookie.get('current_user')),
  currentUser: () => {
    try {
      return JSON.parse(cookie.get('current_user'))
    }
    catch(e) {
      return {}
    }
  },
  user_token: cookie.get('user_token'),
  loginUser(params, cb) {
    return (dispatch) => {
       return processRequest('/api/v1/web/login_with_fb', 'POST', params)
        .then(res => {
          if (!(res && res.user)) return
          cookie.set('current_user', res.user)
          cookie.set('user_token', res.auth_token)
          return res
        })
  }},
  logout(params, cb) {
    return (dispatch) =>
      processRequest('/api/v1/web/logout', 'POST', params)
        .then(res => {
          cookie.remove('current_user')
          cookie.remove('user_token')
          return res
        })
  }
}

export default Auth
