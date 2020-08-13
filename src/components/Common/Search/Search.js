import React from 'react';
import {Button, FormControl, Navbar} from "react-bootstrap";
import {Form, Formik} from "formik";

const Search = ({setUsernameSearchSelector}) => {
    const getFormData = (formData) => {
        setUsernameSearchSelector(formData.username.toLowerCase())
    }

    let initialValues = {
        username: ""
    }

    return (
        <Navbar bg="light" className="mt-4 justify-content-between searchPanel d-block">
            <Formik initialValues={initialValues} onSubmit={getFormData}>
                {({
                      handleSubmit,
                      handleChange,
                      values,

                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormControl
                            name="username"
                            onChange={handleChange}
                            value={values.username}
                            type="text"
                            placeholder="Search by username"
                            className="mr-sm-2"/>
                        <Button type="submit" variant="outline-info">Search</Button>
                    </Form>)
                }

            </Formik>

        </Navbar>
    );
}

export default Search;