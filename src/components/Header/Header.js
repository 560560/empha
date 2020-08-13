import React from 'react';
import {Navbar} from "react-bootstrap";
import logoutHover from "./../../assets/images/logout_hover.svg"

const Header = ({isAuth, username, logout}) => {
    return (

        <Navbar bg="dark" variant="dark" className="appHeader">
            <Navbar.Brand className="ml-sm-3">API test</Navbar.Brand>
            <div className="ml-auto d-flex mr-sm-3">
                {isAuth
                && <>
                    <Navbar.Brand>{username}</Navbar.Brand>
                    <img onClick={logout} src={logoutHover} alt="Logout"/>
                </>}

            </div>


        </Navbar>
    );
}

export default Header;