import React from 'react';
import {Navbar} from "react-bootstrap";

const Footer = (props) => {
    return (
        <div className="footer ">
            <Navbar bg="dark" variant="dark" className="p-0 justify-content-center">
                <Navbar.Brand>All rights reserved 2020</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Footer;