import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HashtagList() {
  /* const navigate = useNavigate(); */
  return (
    <>
      <Container>
        <Title>trending</Title>
        <Outline></Outline>
        <Teste>
          {/* {hashtagArray.map((h) => (
            <li key={h.id}>
              <span
                onClick={() => navigate(`/hashtags/${h.name}`)}
              >{h.name}</span>
            </li>
          ))} */}
          <li>#javascript</li>
          <li>#react</li>
          <li>#react-native</li>
          <li>#material</li>
          <li>#web-dev</li>
          <li>#mobile</li>
          <li>#css</li>
          <li>#html</li>
          <li>#node</li>
          <li>#sql</li>
        </Teste>
      </Container>
    </>
  );
}

const Title = styled.h1`
  width: 95px;
  height: 40px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
`;

const Outline = styled.div`
  border: 1px solid #484848;
  width: 100%;
`;

const Teste = styled.ul`
  li {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 302px;
  height: 406px;
  background: #171717;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
