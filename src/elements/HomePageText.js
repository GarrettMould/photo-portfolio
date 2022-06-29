import { HomePageMessage, HomePageName } from "./styles/HomePageText.styled";

import { Container } from "./styles/HomePageText.styled";

const HomePageText = (props) => {
  return (
    <>
      <Container>
        <HomePageMessage>
          a collection of 35mm<br></br>film photographs<br></br> taken by
        </HomePageMessage>
        <HomePageName>garrett mould</HomePageName>
      </Container>
    </>
  );
};

export default HomePageText;
