import React from 'react';
import Preloader from "../Common/Preloader/Preloader";
import UserListItem from "./UserListItem";
import {Col, Container, Row} from "react-bootstrap";
import Search from "../Common/Search/Search";
import arrowUp from "../../assets/images/arrowUp.svg"
import arrowDown from "../../assets/images/arrowDown.svg"


const Users = ({users, setUsernameSearchSelector, setSorting, sortingFlow}) => {

    let displayWidth = window.innerWidth


    if (!users) {
        return <Preloader/>
    }
    let setSort = (e) => {
        let [field, flow] = e.target.id.split(" ")
        setSorting(field, flow)
    }

    return (
        <>

            {displayWidth < 768 && <Search setUsernameSearchSelector={setUsernameSearchSelector}/>}
            <Container>
                {displayWidth >= 768 && <Search setUsernameSearchSelector={setUsernameSearchSelector}/>}
                {users.length === 0 && <Row className="justify-content-center mt-5 ml-2 mr-2">
                    <div className="font-weight-bold">Unfortunately there is no user with the requested username</div>
                </Row>}
                <Row className="mt-4">
                    <Col className="justify-content-end">
                        <div className="sortingBlock">
                            <span>Sort by ID</span>
                            <div className="flowArrows">
                                <img onClick={setSort} src={arrowUp} className={sortingFlow === "increase" ? "flow" : ""} id="id increase" alt="arrowUp"/>
                                <img onClick={setSort} src={arrowDown}  className={sortingFlow === "decrease" ? "flow" : ""}id="id decrease" alt="arrowDown"/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">

                    {users.map((user, index) => <UserListItem key={index} user={user}/>)}
                </Row>

            </Container>
        </>
    );
}

export default Users;