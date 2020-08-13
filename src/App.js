import React from 'react';
import './styles/main.scss';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";





function App(props) {
    return (
        <>
            <HeaderContainer/>
            <Switch>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
                {props.match.url === "/" && <Redirect to='/users'/>}
            </Switch>
            <Footer/>
        </>
    );
}

export default withRouter(App);
