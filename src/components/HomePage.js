import { StyledContainer, Padding } from "./styles/Container.styles";

import { FlexRowSpaceBetween } from "./styles/Flex.styles";

import HomePageLeftBlock from "./HomePageLeftBlock";

import HomePageRightBlock from "./HomePageRightBlock";

import Media from "react-media";

const HomePage = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <Padding>
            <HomePageRightBlock
              currentIndex={props.currentIndex}
              clearState={props.clearState}
            ></HomePageRightBlock>
          </Padding>
        ) : (
          <Padding>
            <FlexRowSpaceBetween>
              <HomePageLeftBlock></HomePageLeftBlock>
              <HomePageRightBlock
                currentIndex={props.currentIndex}
                clearState={props.clearState}
              ></HomePageRightBlock>
            </FlexRowSpaceBetween>
          </Padding>
        )
      }
    </Media>
  );
};

export default HomePage;
