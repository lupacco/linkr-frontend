import styled from "styled-components";

export default function Logo() {
    return (

        <LogoContainer>
            <div>
                <h1>linkr</h1>
                <h3>
                    save, share and discover
                </h3>
                <h3>
                    the best links on the web
                </h3>
            </div>
        </LogoContainer>
    )
}
const LogoContainer = styled.div`
  width: 60%;
  background: #151515;
  @media (max-width: 600px) {
    width: 100%;
  }

  div {
    width: 100%;
    margin-left: 15%;
    margin-top: 30vh;

    @media (max-width: 600px) {
      width: 100%;
      margin: 100px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  h1 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 106px;
    line-height: 117px;
    letter-spacing: 0.05em;
    color: #ffffff;

    @media (max-width: 900px) {
      font-size: 90px;
      line-height: 100px;
    }

    @media (max-width: 600px) {
      font-size: 76px;
      line-height: 84px;
    }
  }

  h3 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;

    @media (max-width: 900px) {
      max-width: 270px;
      font-size: 33px;
      line-height: 49px;
    }

    @media (max-width: 600px) {
      font-size: 23px;
      line-height: 34px;
    }
  }
`;
