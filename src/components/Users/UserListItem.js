import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import usernameIcon from '../../assets/images/usernameIcon.svg'
import usernameOnlineIcon from '../../assets/images/usernameOnlineIcon.svg'


const UserListItem = ({user}) => {
    const toCalculateDate = (date) => {
        return new Date(date).toLocaleString()
    }

    return (
        <Col className="col-xl-4 col-sm-6 col-12 userListItemWrapper">
            <Card
                bg="light"
                text='dark'
                className="mb-4 "
            >
                <Card.Header className="d-flex justify-content-between">
                    <span><img src={user.is_active ? usernameOnlineIcon : usernameIcon} alt="Username" className="mr-3"/>{user.username}</span>
                    <span>id {user.id}</span>
                </Card.Header>
                <Card.Body>
                    <Row className="mb-3">
                        <Col className="col-5 pl-sm-3 pl-2 pr-2 description" style={{fontWeight:"600"}}>First name:</Col>
                        <Col className="col-7 pl-sm-3 pl-2 pr-2 userValues">{user.first_name}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="col-5 pl-sm-3 pl-2 pr-2 description" style={{fontWeight:"600"}}> Last name:</Col>
                        <Col className="col-7 pl-sm-3 pl-2 pr-2 userValues">{user.last_name}</Col>
                    </Row>
                    {user.last_login &&
                    <Row>
                        <Col className="col-5 pl-sm-3 pl-2 pr-2 description" style={{fontWeight:"600"}}>Was logged in:</Col>
                        <Col className="col-7 pl-sm-3 pl-2 pr-2 userValues">{toCalculateDate(user.last_login)}</Col>
                    </Row>}


                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="info">Edit profile</Button>
                </Card.Footer>

            </Card>
        </Col>
    );

}

export default UserListItem;