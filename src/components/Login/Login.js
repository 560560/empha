import React from 'react';
import {Formik} from "formik";
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import * as Yup from 'yup'
import passwordIcon from '../../assets/images/passwordlIcon.svg'
import usernameIcon from '../../assets/images/usernameIcon.svg'
import {Redirect} from "react-router-dom";


const Login = ({login, isAuth}) => {


    const getLoginData = (formData) => {
        login({...formData})

    }

    const validationSchema = Yup.object({
        username: Yup.string().required("Field is required!").min(1, "login must contain minimum 1 character"),
        password: Yup.string().required("Field is required!").min(1, "password must contain minimum 1 character")
    })

    let initialValues = {
        username: "",
        password: ""
    }

    if (isAuth) return <Redirect to={`/users`}/>
    return (
        <div className="loginWrapper justify-content-center align-items-center ">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={5} lg={6} md={8} sm={10} className="col-12">
                        <h1 className="text-center pt-4 pb-3">Login form</h1>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={getLoginData}>

                            {({
                                  handleSubmit,
                                  handleChange,
                                  handleBlur,
                                  values,
                                  touched,
                                  isValid,
                                  errors,
                              }) => (
                                <Form noValidate onSubmit={handleSubmit} className="mt-4 ">
                                    <Form.Group as={Row} controlId="Username">
                                        <Form.Label column sm={4} className="font-weight-bold text-sm-right  d-sm-block d-none">
                                            Username
                                        </Form.Label>
                                        <Col sm={8}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">
                                                        <img src={usernameIcon} alt="Username" width="20"/>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    onChange={handleChange}
                                                    value={values.username}
                                                    placeholder="Enter your username"
                                                    isInvalid={touched.username && !!errors.username}
                                                    isValid={touched.username && !errors.username}
                                                    autoComplete="username"
                                                />

                                                <Form.Control.Feedback type="invalid" className="text-center ">
                                                    {errors.username}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Col>

                                    </Form.Group>


                                    <Form.Group as={Row} controlId="Password">
                                        <Form.Label column sm={4} className="font-weight-bold text-sm-right d-sm-block d-none">
                                            Password
                                        </Form.Label>
                                        <Col sm={8}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">
                                                        <img src={passwordIcon} alt="Password" width="20"/>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter your password"
                                                    onChange={handleChange}
                                                    isInvalid={touched.password && !!errors.password}
                                                    isValid={touched.password && !errors.password}


                                                />
                                                <Form.Control.Feedback type="invalid" className="text-center">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} controlId="RememberMe" className="d-flex align-items-center justify-content-between">

                                        <Col className="d-flex justify-content-end col-sm-8 col-12 ml-auto">
                                            <Button style={{width: "100%"}} className="" type="submit1" variant="info">Login</Button>
                                        </Col>
                                    </Form.Group>

                                </Form>

                            )}

                        </Formik>


                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default Login;