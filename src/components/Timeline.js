import Trip from "../elements/Trip";

import { StyledContainer } from "./styles/Container.styles";
import Timeline from "@mui/lab/Timeline";

const StyledTimeline = (props) => {
  return (
    <StyledContainer>
      <Timeline position="alternate">
        <Trip></Trip>
      </Timeline>
    </StyledContainer>
  );
};

export default StyledTimeline;
