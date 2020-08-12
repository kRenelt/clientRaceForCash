import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import * as userRemote from '../../remotes/user.remote';
import { First } from 'react-bootstrap/esm/PageItem';

export const RegistrationComponent: React.FC = () => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputFirstName, setInputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');

    useEffect(() => {
      }, []);

          // function where account is registered will be implemented
          const registerAccount = async () => {
            const response = await userRemote.registerUser({
                email: inputEmail,
                username: inputUsername,
                password: inputPassword,
                firstName: inputFirstName,
                lastName: inputLastName
            });
            console.log(response);
            if(response.data.id.toString() && response.data.email && response.data.username &&
                response.data.password && response.data.firstName && response.data.lastName) {

                    localStorage.setItem('id', response.data.id.toString());
                    localStorage.setItem('email', response.data.email);
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('password', response.data.password);
                    localStorage.setItem('firstName', response.data.firstName);
                    localStorage.setItem('lastName', response.data.lastName);
                }

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

                        <Form.Group controlId='formUsername'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
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
                        {/* May put in input for roles in later commits */}
                    </Form>
                    <Button type = "submit" onClick={registerAccount}>
                        Register
                    </Button>
                {/* </Col>
            </Row> */}
        </Container>
    );
}