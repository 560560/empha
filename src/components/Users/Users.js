import React from 'react';
import Preloader from "../Common/Preloader/Preloader";
import UserListItem from "./UserListItem";
import {Container, Row} from "react-bootstrap";
import Search from "../Common/Search/Search";


const Users = ({users, setUsernameSearchSelector}) => {

    let displayWidth = window.innerWidth

    if (!users) {
        return <Preloader/>
    }

    return (
        <>

            {displayWidth < 768 && <Search setUsernameSearchSelector={setUsernameSearchSelector}/>}
            <Container>
                {displayWidth >= 768 && <Search setUsernameSearchSelector={setUsernameSearchSelector}/>}
                {users.length === 0 && <Row className="justify-content-center mt-5 ml-2 mr-2">
                    <div className="font-weight-bold">Unfortunately there is no user with the requested name</div>
                </Row>}
                <Row className="mt-4">

                    {users.sort((a, b) => a.id > b.id ? 1 : -1).map((user, index) => <UserListItem key={index} user={user}/>)}
                </Row>

            </Container>
        </>
    );
}

export default Users;