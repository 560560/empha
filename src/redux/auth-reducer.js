import {authApi} from "../api/api";
import {clearWhileLogout} from "./users-reducer";

const SET_TOKEN = "auth-reducer/SET_TOKEN"
const SET_LOGOUT = "auth/SET_LOGOUT"
const SET_ERROR = "auth/SET_ERROR"
const CLEAR_ERROR = "auth/CLEAR_ERROR"

let initialState = {
    token: null,
    isAuth: false,
    username: null,
    error: null
    //  token: "781bd9f1de084f4daa7ba2aa8a71a2eab855354e",
    // isAuth: true,
    // username: "test_super"
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
                username: action.username,
                isAuth: true
            }
        case SET_LOGOUT:
            return {
                ...state,
                isAuth: false,
                token: null,
                username: null
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state

    }
}

//ACTION CREATORS

export const setToken = (token, username) => {
    return {type: SET_TOKEN, token, username}
}
const setLogout = () => {
    return {type: SET_LOGOUT}
}

const setError = (error) => {
    return {type: SET_ERROR, error}
}

const clearError = () => {
    return {type: CLEAR_ERROR}
}


//THUNK CREATORS

export const login = ({username, password}) => async (dispatch) => {
    try {
        let response = await authApi.login(username, password)
        if (response.status === 200) {
            dispatch(setToken(response.data.token, username))
            localStorage.isAuth = true;
            localStorage.token = response.data.token
            localStorage.username = username
        }
    } catch (err) {
        if (err.message === "Request failed with status code 400") {
            dispatch(setError("Unable to log in with provided credentials."))
            setTimeout(() => {
                dispatch(clearError())
            }, 4000)
        }
    }

}

export const logout = () => async (dispatch) => {
    dispatch(setLogout())
    dispatch(clearWhileLogout())
    localStorage.clear()
}


export default authReducer