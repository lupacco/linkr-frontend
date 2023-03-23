import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { signIn } from "../services/services.js";
import styled from "styled-components";
import { UserContext } from "../contexts/UserProvider.js";



export default function SignIn() {
  //Contexts
  const {myUser, setMyUser} = useContext(UserContext)
  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);

    const body = {
      email,
      password
    }

    signIn(body)
      .then((res) => {
        const newObj = {...myUser, ...res.data}
        
        setMyUser(newObj)
        resetForm();
        localStorage.setItem("pictureUrl", JSON.stringify(res.data.pictureUrl));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("username", JSON.stringify(res.data.username));
        localStorage.setItem("id", JSON.stringify(res.data.id));
        navigate("/home");
        setLoading(false);
      })
      .catch((res) => {
        if (res.response.status === 401) {
          resetForm();
          alert("Login ou senha incorretos!");
          setLoading(false);
          return;
        }

        alert("Há algo de errado com o servidor!");
        setLoading(false)
      })
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <AuthContainer>
      <Form onSubmit={sendForm}>
        <input
          placeholder="e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <button disabled={loading}>
          Log In
        </button>

        <Link to="/signup">
          <ButtonLogin>First time? Create an account!</ButtonLogin>
        </Link>
      </Form>
    </AuthContainer>
  );
}

const AuthContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    align-items: flex-start;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    margin: 40px 20px;
  }

  input {
    width: 90%;
    height: 65px;
    background: #ffffff;
    border-radius: 6px;
    padding-left: 17px;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #9f9f9f;
    margin-bottom: 13px;

    @media (max-width: 600px) {
      width: 100%;
      height: 55px;
      margin-bottom: 13px;
    }
  }

  button {
    width: 90%;
    height: 65px;
    background: #1877f2;
    border-radius: 6px;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
      width: 100%;
      height: 55px;
      margin-bottom: 18px;
    }
  }
`;

const ButtonLogin = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-family: "Lato";
  margin-top: 14px;
  text-decoration-line: underline;
  color: #ffffff;
`;