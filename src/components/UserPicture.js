import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserProvider";

export default function UserPicture() {
  const {myUser} = useContext(UserContext)

  return (
    <Picture
      alt=""
      src={myUser.pictureUrl}
    ></Picture>
  );
}

const Picture = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 26px;
`;
