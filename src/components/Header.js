import { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [logoutOpen, setLogoutOpen] = useState(false)  

  return (
    <Container>
      <h1>linkr</h1>
      <div>
        <ion-icon onClick={() => setLogoutOpen(!logoutOpen)} name={logoutOpen ? "chevron-up-outline" : "chevron-down-outline"}></ion-icon>
        <img src="https://series.band.uol.com.br/wp-content/uploads/2014/05/queixo-rubro-300x300-1.jpg"></img>
      </div>
    </Container>
  );
}

const Container = styled.header`
  padding: 0 8px;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #151515;
  color: #ffffff;
  > h1 {
    font-size: 49px;
    font-family: "Passion One", cursive;
  }
  > div {
    display: flex;
    align-items: center;
    >ion-icon{
        font-size: 32px;
        margin-right: 8px;
        :hover{
            cursor: pointer;
        }
    }
    >img{
        width: 53px;
        height: 53px;
        border-radius: 26px;
    }
  }
`;
