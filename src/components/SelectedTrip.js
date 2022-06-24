import { StyledContainer } from "./styles/Container.styles";

import SelectedTripDetails from "../elements/SelectedTripDetails";

import SelectedTripSummary from "../elements/SelectedTripSummary";

import SelectedTripGallery from "../elements/SelectedTripGallery";


const SelectedTrip = (props) => {
  return (
    <div>
        <SelectedTripDetails></SelectedTripDetails>
        <SelectedTripSummary></SelectedTripSummary>
        <SelectedTripGallery></SelectedTripGallery>
      
    </div>
  );
};

export default SelectedTrip;