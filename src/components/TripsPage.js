import TripsPhoto from "../elements/TripsPhoto";
import TripsTimeline from "./TripsTimeline";
import { FlexRowBetween } from "./styles/Flex.styles";

const TripsPage = (props) => {
  return (
    <FlexRowBetween>
      <TripsTimeline handleClick={props.handleClick}></TripsTimeline>
      <TripsPhoto></TripsPhoto>
    </FlexRowBetween>
  );
};

export default TripsPage;
