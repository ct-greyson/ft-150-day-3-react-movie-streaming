import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // no refresh
    setUser({ name: username, isLoggedIn: true}) //updates user state in our context
    navigate("/") // navigate back to home page
  }

  return (
    <Container fluid className="vh-100 p-0">
      <NavBar />  
      <Row className="h-50 my-auto w-100 justify-content-center">
        <Col xs={9} sm={6}>
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter username"
                autoComplete="off"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
