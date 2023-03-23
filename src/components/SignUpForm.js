import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SingUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const navigate = useNavigate();

  function createAccount(e) {
    e.preventDefault();

    const body = {
      email,
      password,
      username,
      pictureUrl
    };

    axios.post(`http://localhost:5000/signup`, body)
    .then((res) => {
      alert("Usuario cadastrado com sucesso!");
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
      if (err.response && err.response.status === 409) {
        alert("O e-mail inserido já está cadastrado.");
      }
    });
  }
  return (
    <ContainerSignUp>
      <Form onSubmit={createAccount}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="picture url"
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)}
        />

        <Button type="submit">Cadastrar</Button>
        <Link to="/">
          <ButtonLogin>First time? Create an account!</ButtonLogin>
        </Link>
      </Form>
    </ContainerSignUp>
  );
}

export const ContainerSignUp = styled.div`
width: 40%;
height: 100%;
display: flex;
align-items: center;

@media (max-width: 600px) {
  width: 100%;
  align-items: flex-start;
}
`;
export const Button = styled.button`
  height: 45px;
  width: 100%;
  border-radius: 5px;
  border-style: none;

  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 14px;
  margin-bottom: 24px;

  &:hover{
    cursor: pointer;
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