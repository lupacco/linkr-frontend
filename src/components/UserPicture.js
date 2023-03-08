import styled from "styled-components";

export default function UserPicture() {
  return (
    <Picture
      alt=""
      src="https://series.band.uol.com.br/wp-content/uploads/2014/05/queixo-rubro-300x300-1.jpg"
    ></Picture>
  );
}

const Picture = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 26px;
`;
