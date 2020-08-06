import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

export const RegistrationComponent: React.FC = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputFirstName, setInputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');

    useEffect(() => {
      }, []);

    //   const loginCredentials = async () => {
        const loginCredentials = () => {
        const payload = {
            email: inputEmail, 
            password: inputPassword
        };
        // console.log(payload);
        // try{
        //     res = await loginRemote.checkLogin(payload);
        //     await login();
        // } catch(err) {
        //     console.log(err);
        // }
    }

    return(
        <Container>
            {/* <Row>
                <Col> */}
                    <Form>

                        <Form.Label><h1>Registration</h1></Form.Label>

                        <Form.Group controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId='formPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId='formFirstName'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={inputFirstName} onChange={(e) => setInputFirstName(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId='formLastName'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={inputLastName} onChange={(e) => setInputLastName(e.target.value)} />
                        </Form.Group>

                        <p>role</p>
                    </Form>
                    <Button type = "submit" onClick={() => loginCredentials()}>
                        Register
                    </Button>
                {/* </Col>
            </Row> */}
        </Container>
    );
}