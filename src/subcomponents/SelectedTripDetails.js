import { FlexColumn, FlexRowBetween } from "../components/styles/Flex.styles";
import { TripTitle, CameraDetails } from "./styles/TripsInformationALL.styled";

import { allPhotos } from "../Photos";

const SelectedTripDetails = (props) => { 
    var tripIndex = props.tripIndex
    
    return (
        
        <FlexColumn>
            <TripTitle fontSize={props.isMobile ? "90%" : "120%"} fontWeight="500" paddingBottom="0%">{allPhotos[tripIndex].destinationMobile}</TripTitle>
            <TripTitle fontSize={props.isMobile ? "90%" : "120%"} fontWeight="500" paddingBottom="0%"><span>{allPhotos[tripIndex].datesMobile}</span></TripTitle>
            <CameraDetails fontSize={props.isMobile ? "90%" : "120%"}>{allPhotos[tripIndex].cameraTitle}</CameraDetails>
            <CameraDetails fontSize={props.isMobile ? "90%" : "120%"}>{allPhotos[tripIndex].filmTitle}</CameraDetails>
            
        </FlexColumn>
        
        
    )
    
}

export default SelectedTripDetails;