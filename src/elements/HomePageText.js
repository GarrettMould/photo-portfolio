import { HomePageMessage, HomePageName } from "./styles/HomePageText.styled";

import { Container } from "./styles/HomePageText.styled";

const HomePageText = (props) => {
  return (
    <>
      <Container>
        <HomePageMessage>
          A COLLECTION OF 35MM<br></br>FILM PHOTOGRAPHS<br></br> TAKEN BY
        </HomePageMessage>
        <HomePageName>GARRETT MOULD</HomePageName>
      </Container>
    </>
  );
};

export default HomePageText;
