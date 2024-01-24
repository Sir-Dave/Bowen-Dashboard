import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Header from './Header';


const Settings: React.FC = () => {

    return (
        <>
            <Header />
            <style>
                {`
                    body {
                        background-color: #E8E9EB;
                    }
                `}
            </style>


            <Container className='settings min-vh-100' fluid>
                <Row className="h-100 pt-3 justify-content-center align-items-center">
                    <Col lg="9">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Update Password</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row className="h-100 pt-3 justify-content-center align-items-center">
                    <Col lg="9">
                <h4 id='settings-header'>Settings - Update Password</h4>
                    </Col>

                </Row >

                <Row className="h-100 pt-2 justify-content-center align-items-center">
                    <Col lg="9">

                        <Form className="bg-white p-4 mt-3">
                            <h5 className='text-center'><b> To update your password </b></h5>

                            <p className='text-center small'>
                                    Enter your new password in the input field below and 
                                    click the 'Update Password' button to update your password 
                            </p>

                            <Form.Label> <b>Password*</b></Form.Label>
                            <Row>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="password" placeholder="Password" aria-label="password"
                                            aria-describedby="password-input"
                                        />
                                        <InputGroup.Text>
                                            {<FontAwesomeIcon icon={faEye} />}

                                        </InputGroup.Text>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Button variant="primary" type="submit" className="w-100 btn">
                                        Update Password
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Settings;