import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./auth-reducer";
import headerReducer from "./header-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    auth: authReducer,
    header: headerReducer,
    usersPage: usersReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
