import axios from "axios";
import { useEffect, useContext } from "react";
import { PostContext } from "../contexts/PostProvider";
//Components
import Header from "../components/Header.js";
import styled from "styled-components";
import Post from "../components/Post.js";
import SharePost from "../components/SharePost.js";

export default function Home() {
  //Post Contexts
  const {posts, setPosts} = useContext(PostContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/home")
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(posts[0])

  return (
    <Container>
      <Header />
      <Title>timeline</Title>
      <SharePost />
      {posts.map(post => (
        <Post key={post.id} />
      ))}
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
