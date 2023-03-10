import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import PostContext from "../contexts/PostContext.js";

export default function SharePostBox() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({});
  const [posts, setPosts] = useContext(PostContext);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    axios
      .post("http://localhost:5000/posts", form)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        setPosts([...posts, response.data]);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        alert("There was an error publishing your link");
      });
  }

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  return (
    <SharePost>
      <img src="https://i.imgflip.com/2pybwo.jpg?a465984" alt="" />
      <PostForm onSubmit={handleSubmit}>
        <h1>What are you going to share today?</h1>
        <FormInput
          data-test="link"
          placeholder="http://..."
          type="url"
          name="url"
          value={form.url}
          onChange={handleForm}
          disabled={isSubmitting}
          required
        />
        <FormInput
          data-test="description"
          placeholder="Awesome article about #javascript"
          type="text"
          name="content"
          value={form.content}
          onChange={handleForm}
          disabled={isSubmitting}
        />
      </PostForm>
      <PostButton type="submit" disabled={isSubmitting}>
        <h1>{isSubmitting ? "Publishing..." : "Publish"}</h1>
      </PostButton>
    </SharePost>
  );
}

const PostButton = styled.div`
  width: 112px;
  height: 31px;
  background: ${({ isSubmitting }) => (isSubmitting ? "#75a8eb" : "#1877f2")};
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  right: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    width: 46px;
    height: 17px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }
  :hover {
    cursor: pointer;
  }
`;

const SharePost = styled.div`
  width: 611px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  position: relative;
  display: flex;
  padding: 16px;
  margin-bottom: 30px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-right: 20px;
  }
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h1 {
    width: 445px;
    height: 40px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 24px;
    color: #707070;
  }
`;

const FormInput = styled.input`
  width: 503px;
  background: #efefef;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  &:nth-child(2) {
    height: 30px;
  }
  &:nth-child(3) {
    height: 66px;
  }
  ::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
  }
`;
