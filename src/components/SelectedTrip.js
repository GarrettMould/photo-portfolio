import { StyledContainer } from "./styles/Container.styles";

import SelectedTripDetails from "../elements/SelectedTripDetails";

import SelectedTripSummary from "../elements/SelectedTripSummary";

import SelectedTripGallery from "../elements/SelectedTripGallery";


const SelectedTrip = (props) => {
  return (
    <div>
        <SelectedTripDetails destination={props.destination} dates={props.dates} camera={props.camera} film={props.film}></SelectedTripDetails>
        <SelectedTripSummary summary={props.summary}></SelectedTripSummary>
        <SelectedTripGallery photoGallery={props.photoGallery}></SelectedTripGallery>
      
    </div>
  );
};

export default SelectedTrip;