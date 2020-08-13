import React from 'react';
import Preloader from "../Common/Preloader/Preloader";
import UserListItem from "./UserListItem";
import { Container, Row} from "react-bootstrap";

const Users = ({users}) => {
    if (!users) {
        return (
            <Preloader/>
        )

    }

    return (

        <Container>
            <Row className="mt-5">
                {users.sort((a,b) => a.id > b.id ? 1 : -1).map((user, index) => <UserListItem key={index} user={user}/>)}
            </Row>

        </Container>
    );
}

export default Users;