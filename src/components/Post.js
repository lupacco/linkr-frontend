import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
//Components
import UserPicture from "./UserPicture";

export default function Post() {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const URL = `http://localhost:5000/users`;

    const promise = axios.get(URL);
    promise.then((res) => setPosts(res.data));
    promise.catch(() => {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    });
  }, []);
  if (posts === undefined) {
    return <div>Loading...</div>;
  }
  if (posts.length === 0) {
    return <div>"There are no posts yet"</div>;
  }

  function handlePublish(event) {
    event.preventDefault();

    axios
      .post(`http://localhost:5000/users`, {
        url: url,
        content: content,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/user");
        setUrl("");
        setContent("");
        setDisabled(!disabled);
      })
      .catch(() => {
        alert("There was an error publishing your link");
        setDisabled(!disabled);
      });
  }

  function handleClick() {
    setDisabled(!disabled);
  }

  return (
    <>
      <Timeline>timeline</Timeline>
      <ContainerPublish data-test="publish-box">
        <div>
          <UserPicture />
        </div>
        <FormContainer onSubmit={handlePublish}>
          <p>What are you going to share today?</p>
          <input
            data-test="link"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            value={url}
            type="url"
            placeholder="http://..."
            required
            disabled={disabled}
          ></input>
          <input
            data-test="description"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            type="text"
            placeholder="Awesome article about #javascript "
            disabled={disabled}
          ></input>
          <button data-test="publish-btn" type="submit" onClick={handleClick}>
            <p>Publish</p>
          </button>
        </FormContainer>
      </ContainerPublish>

      <Container>
        <div>
          <UserPicture />
          <div>
            <ion-icon on name="heart-outline"></ion-icon>
          </div>
          <p>13,5k</p>
        </div>

        {posts.map(function (post) {
          //renderizar(post)
          return (
            <div key={post.id} data-test="publish-btn" >
              <div>
                <h1 data-test="username" >Juvenal Juvêncio</h1>
                <p data-test="description" >{post.content}</p>
                <LinkSection>
                  <div>
                    {/* <h2>{post.content}</h2> */}
                    <p data-test="link" >{post.url}</p>
                  </div>
                  {/* <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Vyp-mi0x3JFTE66-dkmRIxEFdfe1byjMjQ&usqp=CAU"></img> */}
                </LinkSection>
              </div>
            </div>
          );
        })}
        <div></div>
      </Container>
    </>
  );
}

//function renderizar(urlLink) {
// const urlMetadata = require("url-metadata");
// urlMetadata(urlLink).then(
//   function (metadata) {
//     // success handler
//     console.log(metadata);
//   },
//   function (error) {
//     // failure handler
//     console.log(error);
//   }
// );
//}

const Container = styled.div`
  background-color: #171717;
  border-radius: 16px;
  padding: 16px;
  > div {
    color: #ffffff;
    > h1 {
      font-size: 20px;
    }
    > p {
      font-size: 16px;
      margin-bottom: 8px;
    }
    :first-child {
      height: 50vh;
      > img {
        margin-bottom: 12px;
      }
      ion-icon {
        font-size: 20px;
        :hover {
          cursor: pointer;
        }
      }
      display: flex;
      flex-direction: column;
      // align-items: center;
      // justify-content: flex-start;
      margin-right: 12px;
    }
  }
`;

const LinkSection = styled.section`
  display: flex;
  color: #ffffff;
  border: solid 1px #c4c4c4;
  border-radius: 11px;
  padding: 8px;
  h2 {
    font-size: 16px;
  }
  p {
    text-align: justify;
  }
  > img {
    width: 155px;
    height: 155px;
    margin-left: 8px;
  }
`;

const Timeline = styled.h1`
  width: 145px;
  height: 64px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
`;
const ContainerPublish = styled.div`
  display: flex;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  > div {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-bottom: 110px;
    margin-left: 18px;
  }
`;

const FormContainer = styled.form`
  display: flex;

  margin: 18px 22px;
  flex-direction: column;
  flex-wrap: nowrap;

  > p {
    margin-bottom: 15px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
  }

  > input {
    width: 50vh;
    margin-bottom: 5px;
    display: flex;
    border-style: none;
    background: #efefef;
    border-radius: 5px;
    &::placeholder {
      color: #949494;
      font-size: 18px;
    }
  }
  > button {
    border-style: none;
    margin-bottom: 15px;
    width: 112px;
    height: 31px;
    background: #1877f2;
    border-radius: 5px;
    margin-left: 325px;
    margin-right: 22px;
    > p {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
    }
  }
`;
