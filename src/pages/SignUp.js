import styled from "styled-components";
import Logo from "../components/Logo";
import SignUpForm from "../components/SignUpForm";

export default function SingUp() {
    return (
        <SingUpContainer>
            <Logo />
            <SignUpForm />
        </SingUpContainer>
    );
}

const SingUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
