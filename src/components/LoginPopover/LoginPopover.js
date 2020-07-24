import React, {useState} from "react";
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';

const LoginPopover = (props) => {
    const {
        showLogin,
        setShowLogin,
        login
    } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        console.log(email, password);
    }

    return(
        <Modal show={showLogin} onHide={setShowLogin}> 
            <Modal.Body>
                <Container>
                    <Row>
                        <Col className="text-center">
                            Login To Gookarma
                        </Col>
                    </Row>
                    <div>{JSON.stringify(props)}</div>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email / Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" block onClick={loginHandler}>
                                Login
                            </Button>
                        </Col>
                       
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
};

export default LoginPopover;