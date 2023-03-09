import { useState } from "react";
import styled from "styled-components";
//Components
import UserPicture from "./UserPicture";

export default function Post() {
  const [liked, setLiked] = useState(false);

  return (
    <Container liked={liked}>
      <div>
        <UserPicture />
        <div>
          <ion-icon
            onClick={() => setLiked(!liked)}
            name={liked ? "heart" : "heart-outline"}
          ></ion-icon>
        </div>
        <p>16,5k</p>
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
  );
}

const Container = styled.div`
  background-color: #171717;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  margin: 32px 0;   
  > div {
    color: #ffffff;
    > h1 {
      font-size: 20px;
    }
    > p {
      font-size: 16px;
      margin-bottom: 8px;
    }
    &:first-child {
      /* height: 50vh; */
      > img {
        margin-bottom: 12px;
      }
      ion-icon {
        font-size: 20px;
        color: ${(props) => (props.liked ? "#AC0000" : "#FFFFFF")};
        &:hover {
          cursor: pointer;
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
  p {
    text-align: justify;
  }
  > img {
    width: 155px;
    height: 155px;
    margin-left: 8px;
  }
`;
