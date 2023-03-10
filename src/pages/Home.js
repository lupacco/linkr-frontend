import Header from "../components/Header.js";
import styled from "styled-components";
import Post from "../components/Post.js"
import SharePost from "../components/SharePost.js";

export default function Home() {
  return (
    <Container>
      <Header />
      <Title>timeline</Title>
      <SharePost/>
      <Post/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 611px;
  height: 64px;
  margin-top: 78px;
  margin-bottom: 36px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
`;