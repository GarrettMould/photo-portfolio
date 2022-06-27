import { StyledContainer } from "../components/styles/Container.styles";
import { GridContainer } from "../components/styles/Container.styles";
import GalleryModal from "./GalleryModal";

const Gallery = (props) => {
  const tripPhotos = props.photoGallery;
  return (
    <>
      <StyledContainer>
        <GridContainer>
          {tripPhotos.map(props.renderImageContent)}
        </GridContainer>
      </StyledContainer>
      <GalleryModal
        currentIndex={props.currentIndex}
        closeModal={props.closeModal}
        findPrev={props.findPrev}
        findNext={props.findNext}
        hasPrev={props.currentIndex > 0}
        hasNext={props.currentIndex + 1 < tripPhotos.length}
        src={props.currentIndex ? tripPhotos[props.currentIndex].src : null}
        photoGallery={props.photoGallery}
      ></GalleryModal>
    </>
  );
};

export default Gallery;
