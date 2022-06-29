import Header from "../elements/Header";

import HomePageText from "../elements/HomePageText";

import { Container } from "./styles/Container.styles";

const HomePageRightBlock = (props) => {
  return (
    <Container>
      <Header></Header>
      <HomePageText></HomePageText>
    </Container>
  );
};

export default HomePageRightBlock;
