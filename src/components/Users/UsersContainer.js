import React, {Component} from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Users from "./Users";
import {connect} from "react-redux";
import {getUsers, setUsernameSearchSelector} from "../../redux/users-reducer";
import {getUsersSelector} from "../../redux/users-selector";

class UsersContainer extends Component {
    componentDidMount() {
        if (!this.props.users) {
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
        users: getUsersSelector(state),

    }
}

export default compose(connect(mapStateToProps, {getUsers, setUsernameSearchSelector}), withAuthRedirect)(UsersContainer)