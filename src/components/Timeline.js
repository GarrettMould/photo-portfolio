import Trip from "../elements/Trip";

import Timeline from "@mui/lab/Timeline";

const StyledTimeline = (props) => {
  return (
    <Timeline>
      <Trip handleClick={props.handleClick}></Trip>
    </Timeline>
  );
};

export default StyledTimeline;
