import TripsPhoto from "../elements/TripsPhoto";
import TripsTimeline from "./TripsTimeline";
import { FlexRowBetween } from "./styles/Flex.styles";
import {
  GridRow,
  GridColumn,
  GridContainer,
} from "./styles/StyledGridSection.styled";

const TripsPage = (props) => {
  return (
    <GridContainer>
      <GridRow>
        <GridColumn size="7">
          <TripsTimeline handleClick={props.handleClick}></TripsTimeline>
        </GridColumn>
        <GridColumn size="5" justifyContent="flex-end">
          <TripsPhoto></TripsPhoto>
        </GridColumn>
      </GridRow>
    </GridContainer>
  );
};

export default TripsPage;
