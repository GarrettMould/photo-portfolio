import { HomePageMessage, HomePageName } from "./styles/HomePageText.styled";

import { Container } from "./styles/HomePageText.styled";

import Media from "react-media";

const HomePageText = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <Container>
            <HomePageMessage>
              A COLLECTION OF 35MM FILM PHOTOS TAKEN BY
            </HomePageMessage>
            <HomePageName>GARRETT MOULD</HomePageName>
          </Container>
        ) : (
          <Container>
            <HomePageMessage>
              A COLLECTION OF 35MM<br></br>FILM PHOTOGRAPHS<br></br> TAKEN BY
            </HomePageMessage>
            <HomePageName>GARRETT MOULD</HomePageName>
          </Container>
        )
      }
    </Media>
  );
};

export default HomePageText;
