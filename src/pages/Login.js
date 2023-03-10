
import styled from "styled-components";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
export default function Login() {

  return (
    <SingInContainer>
        <Logo/>
        <LoginForm/>
    </SingInContainer>
  );
}

const SingInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

