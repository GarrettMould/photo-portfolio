import { StyledContainer } from "./styles/Container.styles";

import SelectedTripDetails from "../elements/SelectedTripDetails";

import SelectedTripSummary from "../elements/SelectedTripSummary";

import SelectedTripGallery from "../elements/SelectedTripGallery";

import Gallery from "../elements/Gallery";

const SelectedTrip = (props) => {
  return (
    <div>
      <SelectedTripDetails
        destination={props.destination}
        dates={props.dates}
        camera={props.camera}
        film={props.film}
        cameraTitle={props.cameraTitle}
        filmTitle={props.filmTitle}
      ></SelectedTripDetails>
      <SelectedTripSummary summary={props.summary}></SelectedTripSummary>
      <Gallery
        currentIndex={props.currentIndex}
        renderImageContent={props.renderImageContent}
        closeModal={props.closeModal}
        findPrev={props.findPrev}
        findNext={props.findNext}
        photoGallery={props.photoGallery}
      ></Gallery>
    </div>
  );
};

export default SelectedTrip;
