import React from 'react';
import './styles/main.scss';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        return (
            <>
                <HeaderContainer/>
                <Switch>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    {this.props.match.url === "/" && <Redirect to='/users'/>}
                </Switch>
                <Footer/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)
