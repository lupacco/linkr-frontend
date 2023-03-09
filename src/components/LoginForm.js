import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginForm() {
    return (


        <LoginContainer>
            <InputContainer>
                <input
                    placeholder="e-mail"
                    type="email"
                    required
                />
                <input
                    placeholder="password"
                    type="password"
                    required
                />
                <button >
                    Log In
                </button>
                <Link to="/signup">
                    <ButtonCreate>First time? Create an account!</ButtonCreate>
                </Link>
            </InputContainer>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    align-items: flex-start;
  }
`;
const InputContainer = styled.div`
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

const ButtonCreate = styled.div`
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #ffffff;
`;