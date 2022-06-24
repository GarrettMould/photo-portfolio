import { StyledContainer } from "../components/styles/Container.styles";

import { photos } from "../Photos";

import { GridContainer } from "../components/styles/Container.styles";

import { GridPhoto, PhotoContainer} from "./styles/SelectedTripDetails.styled";



const tripPhotos = photos[0].photos;

const SelectedTripGallery = (props) => { 
    const photoGrid = tripPhotos.map((photo, i) => { 
        return (
            <>
            <PhotoContainer><GridPhoto src={photo.src}></GridPhoto></PhotoContainer>
            </>
        )
        
    })
    return (
    <StyledContainer>
        <GridContainer>{photoGrid}</GridContainer>
    </StyledContainer>
    )
}

export default SelectedTripGallery;