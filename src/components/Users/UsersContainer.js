import React, {Component} from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Users from "./Users";
import {connect} from "react-redux";
import {getUsers} from "../../redux/users-reducer";

class UsersContainer extends Component {
    componentDidMount() {
        if (!this.props.users){
            this.props.getUsers()
        }
    }

    render() {
        return (
            <Users {...this.props}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default compose(connect(mapStateToProps, {getUsers}), withAuthRedirect)(UsersContainer)