import { StyledContainer } from "../components/styles/Container.styles";

import { GridContainer } from "../components/styles/Container.styles";

import { GridPhoto, PhotoContainer} from "./styles/SelectedTripDetails.styled";


const SelectedTripGallery = (props) => { 
    const tripPhotos = props.photoGallery;
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