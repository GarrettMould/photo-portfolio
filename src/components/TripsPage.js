import TripsPhoto from "../elements/TripsPhoto";
import TripsTimeline from "./TripsTimeline";
import { FlexRowBetween } from "./styles/Flex.styles";
import {
  GridRow,
  GridColumn,
  GridContainer,
} from "./styles/StyledGridSection.styled";

import { FlexRowCenter } from "./styles/Flex.styles";

import Media from "react-media";

const TripsPage = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <FlexRowCenter>
            <TripsTimeline handleClick={props.handleClick}></TripsTimeline>
          </FlexRowCenter>
        ) : (
          <GridContainer id="trips">
            <GridRow>
              <GridColumn size="7">
                <TripsTimeline handleClick={props.handleClick}></TripsTimeline>
              </GridColumn>
              <GridColumn size="5" justifyContent="flex-end">
                <TripsPhoto></TripsPhoto>
              </GridColumn>
            </GridRow>
          </GridContainer>
        )
      }
    </Media>
  );
};

export default TripsPage;
