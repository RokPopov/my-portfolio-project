import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5 mb-5">
        <h1
          className="mt-5 mb-5"
          style={{
            fontSize: "3rem",
            marginBottom: "2rem",
            borderBottom: "3px solid #fff",
            textAlign: "center",
          }}
        >
          Login
        </h1>
        <Form.Group
          controlId="formBasicEmail"
          style={{
            textAlign: "center",
          }}
        >
          <Form.Label>
            <h5>Email address</h5>
          </Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
            style={{
              textAlign: "center",
            }}
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          style={{
            textAlign: "center",
          }}
        >
          <Form.Label>
            <h5>Password</h5>
          </Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
            style={{
              textAlign: "center",
            }}
          />
        </Form.Group>
        <Form.Group
          className="mt-5"
          style={{
            textAlign: "center",
          }}
        >
          <Button
            variant="primary"
            type="submit"
            onClick={submitForm}
            style={{
              backgroundColor: "#495057",
              borderColor: "#495057",
              textShadow: "2px 1px  5px #000000",
              marginRight: "10%",
            }}
          >
            Log In
          </Button>
          <Button
            href="/signup"
            style={{
              backgroundColor: "#495057",
              borderColor: "#495057",
              textShadow: "2px 1px  5px #000000",
              marginRight: "10%",
            }}
          >
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
