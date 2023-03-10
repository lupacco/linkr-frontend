import styled from "styled-components";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
=======
>>>>>>> 3a5b1c8f1e0571b8c41fd9fee349c4ef010157c1
//Components
import UserPicture from "./UserPicture";

export default function Post() {
<<<<<<< HEAD
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(false);

  function handlePublish(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/posts", {
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
        <divUser>
          <UserPicture />
        </divUser>
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
        <div>
          <h1>Juvenal Juvêncio</h1>
          <p>
            lorem saubsafub asubfsuf b apsuofsufb apsoub fpasu fb ausbf pusfb af
            baps bapsuf baps fubaspf ubaspf bsapf ubasfp bas pfububf
            asufbsapufbas ufbas pb apsufbapsufbaspf ubaspfubsafp
          </p>
          <LinkSection>
            <div>
              <h2>Bla bla bla bla</h2>
              <p>
                lorem saubsafub asubfsuf b apsuofsufb apsoub fpasu fb ausbf
                pusfb af baps bapsuf baps fubaspf ubaspf bsapf ubasfp bas
                pfububf asufbsapufbas ufbas pb apsufbapsufbaspf ubaspfubsafp
              </p>
            </div>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Vyp-mi0x3JFTE66-dkmRIxEFdfe1byjMjQ&usqp=CAU"
            ></img>
          </LinkSection>
        </div>
      </Container>
    </>
=======
  return (
    <Container>
      <div>
        <UserPicture />
        <div>
          <ion-icon on name="heart-outline"></ion-icon>
        </div>
        <p>13,5k</p>
      </div>
      <div>
        <h1>Juvenal Juvêncio</h1>
        <p>
          lorem saubsafub asubfsuf b apsuofsufb apsoub fpasu fb ausbf pusfb af
          baps bapsuf baps fubaspf ubaspf bsapf ubasfp bas pfububf asufbsapufbas
          ufbas pb apsufbapsufbaspf ubaspfubsafp
        </p>
        <LinkSection>
          <div>
            <h2>Bla bla bla bla</h2>
            <p>
              lorem saubsafub asubfsuf b apsuofsufb apsoub fpasu fb ausbf pusfb
              af baps bapsuf baps fubaspf ubaspf bsapf ubasfp bas pfububf
              asufbsapufbas ufbas pb apsufbapsufbaspf ubaspfubsafp
            </p>
          </div>
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Vyp-mi0x3JFTE66-dkmRIxEFdfe1byjMjQ&usqp=CAU"
          ></img>
        </LinkSection>
      </div>
    </Container>
>>>>>>> 3a5b1c8f1e0571b8c41fd9fee349c4ef010157c1
  );
}

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
<<<<<<< HEAD
      height: 50vh;
=======
        height: 50vh;
>>>>>>> 3a5b1c8f1e0571b8c41fd9fee349c4ef010157c1
      > img {
        margin-bottom: 12px;
      }
      ion-icon {
        font-size: 20px;
<<<<<<< HEAD
        :hover {
          cursor: pointer;
=======
        :hover{
            cursor: pointer;
>>>>>>> 3a5b1c8f1e0571b8c41fd9fee349c4ef010157c1
        }
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
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
<<<<<<< HEAD
  p {
    text-align: justify;
  }
  > img {
=======
  p{
    text-align: justify;
  }
  >img{
>>>>>>> 3a5b1c8f1e0571b8c41fd9fee349c4ef010157c1
    width: 155px;
    height: 155px;
    margin-left: 8px;
  }
`;
<<<<<<< HEAD

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

  > divUser {
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
=======
>>>>>>> 3a5b1c8f1e0571b8c41fd9fee349c4ef010157c1
