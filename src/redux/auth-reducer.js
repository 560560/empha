import {authApi} from "../api/api";

const SET_TOKEN = "auth-reducer/SET_TOKEN"
const LOGOUT = "auth/LOGOUT"

let initialState = {
    // token: null,
    // isAuth: false,
    // username: null
     token: "781bd9f1de084f4daa7ba2aa8a71a2eab855354e",
    isAuth: true,
    username: "test_super"
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
        case LOGOUT:
        return {
            ...state,
            isAuth: false,
            token: null
        }

        default:
            return state

    }
}

//ACTION CREATORS

const setToken = (token, username) => {
    return {type: SET_TOKEN, token, username}
}
export const logout = () => {
    return {type: LOGOUT}
}


//THUNK CREATORS

export const login = ({username, password}) => async (dispatch) => {
    let response = await authApi.login(username, password)
    if (response.status === 200) {
    dispatch (setToken(response.data.token, username))
    }
}


export default authReducer