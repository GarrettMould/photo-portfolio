import { FlexColumn, FlexRowBetween } from "../components/styles/Flex.styles";
import { TripTitle, CameraDetails, FilmDetails } from "./styles/TripsInformationALL.styled";

import { allPhotos } from "../Photos";

const SelectedTripDetails = (props) => { 
    var tripIndex = props.tripIndex
    
    return (
        
        <FlexColumn>
            <TripTitle lineHeight={props.isMobile ? "150%" : "130%"} fontSize={props.isMobile ? "150%" : "500%"} fontWeight="500" paddingBottom="0%">{allPhotos[tripIndex].destinationMobile}</TripTitle>
            <TripTitle lineHeight={props.isMobile ? "150%" : "130%"} fontSize={props.isMobile ? "150%" : "500%"} fontWeight="500" paddingBottom="0%">{allPhotos[tripIndex].datesMobile}</TripTitle>
            <CameraDetails lineHeight={props.isMobile ? "150%" : "130%"} fontSize={props.isMobile ? "150%" : "400%"}>{allPhotos[tripIndex].cameraTitle}</CameraDetails>
            <FilmDetails lineHeight={props.isMobile ? "150%" : "130%"} fontSize={props.isMobile ? "150%" : "400%"}>{allPhotos[tripIndex].filmTitle}</FilmDetails>
        </FlexColumn>
        
        
    )
    
}

export default SelectedTripDetails;