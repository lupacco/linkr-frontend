import styled from "styled-components";
//Components
import Header from "../components/Header";
import Post from "../components/Post";
import UserPicture from "../components/UserPicture";

export default function User() {
  return (
    <>
      <Header />
      <Container>
        <UserHeader>
          <UserPicture />
          <h1>Juvenal Juvêncio's posts</h1>
        </UserHeader>
        <Post />
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: green;
  margin: 0 20%;
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  > h1 {
    margin-left: 16px;
    font-family: "Oswald", sans-serif;
    color: #ffffff;
    font-size: 50px;
    font-weight: 700;
  }
`;
