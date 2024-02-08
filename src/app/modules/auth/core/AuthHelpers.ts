import jwt from 'jwt-decode'
import {AuthModel, DecodedToken} from './_models'
import dayjs from 'dayjs'
import {errorToast} from '../../../../_sos/utils/toastService'

const AUTH_LOCAL_STORAGE_KEY = 'e-assets-auth'
const USER_LOCAL_STORAGE_KEY = 'e-assets-user'

//Checking if access token is expired or not
const isTokenExpire = (token: string): any => {
  const decodedToken: DecodedToken = jwt(token)

  // If token expired then this block will return true
  if (decodedToken) {
    const checkExp = decodedToken.exp
    // console.log(`token expire: ${dayjs.unix(checkExp).diff(dayjs()) < 1}`)
    return dayjs.unix(checkExp).diff(dayjs()) < 1
  }
  return false
}

const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)

  if (!lsValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      // auth_token expiration checking
      if (auth && auth.access) {
        // Access token expiration check
        if (!isTokenExpire(auth.access)) {
          return auth
        } else {
          // if (auth.refresh && isTokenExpire(auth.refresh)) {
          //   errorToast('Session Expired. Please Login to continue.')
          //   window.location.reload()
          //   return
          // }
          // api call for new access token by refresh token
          // After getting new token, we have set the token in local storage

          // if token refresh is failed then send to the login page
          console.log('token has expired. Reload Done!')
          errorToast('Session Expired. Please Login to continue.')
          window.location.reload()
        }
      }
      return
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}
const getUserInfo = (): any | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

  if (!lsValue) {
    return
  }

  try {
    const userInfo: any = JSON.parse(lsValue) as any
    if (userInfo) {
      // You can easily check auth_token expiration also
      return userInfo
    }
  } catch (error) {
    console.error('USER LOCAL STORAGE PARSE ERROR', error)
  }
}

const setAuth = (auth: AuthModel) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(auth)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const setUserInfo = (userInfo: any) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(userInfo)
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, lsValue)
  } catch (error) {
    console.error('USER LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}
const removeUserInfo = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('USER LOCAL STORAGE REMOVE ERROR', error)
  }
}

export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config: {headers: {Authorization: string}}) => {
      const auth = getAuth()
      if (auth && auth.access) {
        config.headers.Authorization = `Bearer ${auth.access}`
      }

      return config
    },
    (err: any) => Promise.reject(err)
  )
}

export {
  getAuth,
  getUserInfo,
  setAuth,
  setUserInfo,
  removeAuth,
  removeUserInfo,
  AUTH_LOCAL_STORAGE_KEY,
  USER_LOCAL_STORAGE_KEY,
}
