import { GridContainer, GridRow, GridColumn, Image } from "../components/styles/StyledGridSection.styled";

import tripImage from "../images/tripsImage.JPG"

const PhotoCarousel = (props) => { 
    return <GridContainer>
        <GridRow><GridColumn size="12"><Image src={tripImage}></Image></GridColumn></GridRow>
    </GridContainer>
}


export default PhotoCarousel; 