import { StyledContainer } from "./styles/Container.styles";
import { StyledTripsBody } from "./styles/TripsBody.styles";
import Trip from "../elements/Trip";
const TripsBody = (props) => {
  return (
    <StyledTripsBody>
      <Trip></Trip>
    </StyledTripsBody>
  );
};

export default TripsBody;
