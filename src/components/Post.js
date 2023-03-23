import styled from "styled-components";
import { useState, useEffect, useContext} from "react";
import axios from "axios";

//Components
import UserPicture from "./UserPicture.js";
import { UserContext } from "../contexts/UserProvider.js";


export default function Post() {
  const [liked, setLiked] = useState(false);
  const {myUser} = useContext(UserContext)
  
  return (
    <PostContainer>
      <div className="like">
        <UserPicture/>
        <ion-icon
          on
          name={liked ? "heart" : "heart-outline"}
          onClick={() => setLiked(!liked)}
        ></ion-icon>
        <span>13 likes</span>
      </div>
      <PostContent>
        <h2>{myUser.username}</h2>
        <h3>
          Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
        </h3>
        <LinkPreview>
          <div>
            <h1>Como aplicar o Material UI em um projeto React </h1>
            <h2>
              Hey! I have moved this tutorial to my personal blog. Same content,
              new location. Sorry about making you click through to another
              page.
            </h2>
            <h3>https://medium.com/@pshrmn/a-simple-react-router</h3>
          </div>
          <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="" />
        </LinkPreview>
      </PostContent>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  width: 611px;
  height: 276px;
  background: #171717;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 12px;
  position: relative;
  display: flex;
  padding: 16px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-right: 20px;
  }
  .like {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    /* width: 50px; */
    /* background-color: red; */
    ion-icon {
      margin-top: 4px;
      width: 20px;
      height: 20px;
      padding: 15px 15px 0px 15px;
      :hover {
        cursor: pointer;
      }
    }
    span {
      width: 50px;
      height: 13px;
      padding: 5px;
      margin-left: 2px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

const PostContent = styled.div`
  height: 256px;
  width: 502px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    width: 502px;
    height: 23px;
    color: #ffffff;
  }
  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #b7b7b7;
  }
`;

const LinkPreview = styled.div`
  width: 503px;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  padding: 20px;
  display: flex;
  align-items: center;
  /* background-color: lightcyan; */
  /* flex-direction: column; */
  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    h1 {
      width: 250px;
      height: 38px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #cecece;
    }
    h2 {
      width: 303px;
      height: 39px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      color: #9b9595;
    }
    h3 {
      width: 263.19px;
      height: 13px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
      color: #cecece;
      margin-top: 8px;
    }
  }
  img {
    margin-left: 40px;
    height: 100%;
    width: auto;
    border-radius: 0px 12px 13px 0px;
  }
`;
