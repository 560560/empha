import React, {Component} from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Users from "./Users";

class UsersContainer extends Component {
    render() {
        return (
           <Users/>
        );
    }
}

export default compose(withAuthRedirect)(UsersContainer)