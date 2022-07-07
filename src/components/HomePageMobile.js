import { StyledContainer, Padding } from "./styles/Container.styles";

import HomePageRightBlock from "./HomePageRightBlock";

const HomePageMobile = (props) => {
  return (
    <Padding>
      <HomePageRightBlock
        currentIndex={props.currentIndex}
        clearState={props.clearState}
      ></HomePageRightBlock>
    </Padding>
  );
};

export default HomePageMobile;
