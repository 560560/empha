import React, {Component} from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

class LoginContainer extends Component {
    render() {
        return (
            <Login {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, {login})(LoginContainer)