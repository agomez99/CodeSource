import "./style.css"
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewUserForm = () => {
    return (
        <Card body className="cardContainer">
            <Form>
            
            <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                <p></p>
                <Button variant="primary" type="submit">Register</Button>
            </Form>
        </Card>
    )
}

export default NewUserForm;