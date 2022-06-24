import { StyledContainer } from "./styles/Container.styles";

import SelectedTripDetails from "../elements/SelectedTripDetails";

import SelectedTripSummary from "../elements/SelectedTripSummary";


const SelectedTrip = (props) => {
  return (
    <div>
        <SelectedTripDetails></SelectedTripDetails>
        <SelectedTripSummary></SelectedTripSummary>
    </div>
  );
};

export default SelectedTrip;