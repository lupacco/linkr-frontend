import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserProvider";

export default function SharePost() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const { myUser } = useContext(UserContext);

  function createHashTagsArray(description) {
    const regexHashtag = /#\w+/g;
    const hashtags = [];

    let match;
    while ((match = regexHashtag.exec(description)) !== null) {
      hashtags.push(match[0]);
    }

    return hashtags;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    let hashtags = createHashTagsArray(description);
    let post = {
      url:url,
      description:description,
      hashtags:hashtags
    }

    axios
      .post("http://localhost:5000/home/posts", post, {
        headers: {
          Authorization: `Bearer ${myUser.token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        event.target.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        alert("Erro ao publicar o link.");
      });
  }

  // useEffect(() => {
  //   if(description && url){
  //     setIsSubmitting(true)
  //   } else{
  //     setIsSubmitting(false)
  //   }
  // }, [description, url])

  return (
    <SharePostContainer>
      <img src={myUser.pictureUrl} alt="" />
      <PostForm onSubmit={handleSubmit}>
        <h1>What are you going to share today?</h1>
        <FormInput
          data-test="link"
          disabled={isSubmitting}
          placeholder="http://..."
          type="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <FormInput
          data-test="description"
          placeholder="Awesome article about #javascript"
          type="text"
          name="content"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isSubmitting}
        />
        <PostButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Publishing..." : "Publish"}
        </PostButton>
      </PostForm>
    </SharePostContainer>
  );
}

const PostButton = styled.button`
  width: 112px;
  height: 31px;
  background: ${({ isSubmitting }) => (isSubmitting ? "#75a8eb" : "#1877f2")};
  border-radius: 5px;
  border-style: none;
  position: absolute;
  bottom: 10px;
  right: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato";
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;

const SharePostContainer = styled.div`
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
