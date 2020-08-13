import {usersApi} from "../api/api";

const SET_USERS = "users-reducer/SET_USERS"
const SET_USERNAME_SEARCH_SELECTOR = "users-reducer/SET_USERNAME_SEARCH_SELECTOR"
const CLEAR_WHILE_LOGOUT = "users-reducer/CLEAR_WHILE_LOGOUT"


let initialState = {
    users: null,
    usernameSearchSelector: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_USERNAME_SEARCH_SELECTOR:
            return {
                ...state,
                usernameSearchSelector: action.payload
            }
        case CLEAR_WHILE_LOGOUT:
            return {
                ...state,
                users: null
            }
        default: {

            return state
        }
    }
}

//ACTION CREATORS
const setUsers = (payload) => {
    return {type: SET_USERS, payload}
}

export const setUsernameSearchSelector = (payload) => {
    return {type: SET_USERNAME_SEARCH_SELECTOR, payload}
}

export const clearWhileLogout = () => {
    return {type: CLEAR_WHILE_LOGOUT}
}

//THUNK CREATORS

export const getUsers = () => async (dispatch, getState) => {
    let response = await usersApi.getUsers(getState().auth.token)
    if (response.status === 200) {
        dispatch(setUsers(response.data))
    }
}


export default usersReducer