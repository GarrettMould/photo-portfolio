import { StyledContainer, Padding } from "./styles/Container.styles";

import { FlexRowSpaceBetween } from "./styles/Flex.styles";

import HomePageLeftBlock from "./HomePageLeftBlock";

import HomePageRightBlock from "./HomePageRightBlock";

const HomePage = (props) => {
  return (
    <Padding>
      <FlexRowSpaceBetween>
        <HomePageLeftBlock></HomePageLeftBlock>
        <HomePageRightBlock></HomePageRightBlock>
      </FlexRowSpaceBetween>
    </Padding>
  );
};

export default HomePage;
