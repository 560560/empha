import React from 'react';
import {Spinner} from "react-bootstrap";

const Preloader = (props) => {
    return (
        <div className="preloader d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="success" size="xl"/>
            <div className="ml-2">Loading...</div>
        </div>
    );
}

export default Preloader;