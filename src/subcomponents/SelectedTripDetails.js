import { FlexColumn, FlexRowBetween } from "../components/styles/Flex.styles";
import { TripTitle, CameraDetails } from "./styles/TripsInformationALL.styled";

import { allPhotos } from "../Photos";

const SelectedTripDetails = (props) => { 
    var tripIndex = props.tripIndex
    
    return (
        
        <FlexColumn>
            <TripTitle lineHeight={props.isMobile ? "150%" : "120%"} fontSize={props.isMobile ? "90%" : "450%"} fontWeight="500" paddingBottom="0%">{allPhotos[tripIndex].destinationMobile}</TripTitle>
            <TripTitle lineHeight={props.isMobile ? "150%" : "120%"} fontSize={props.isMobile ? "90%" : "450%"} fontWeight="500" paddingBottom="0%">{allPhotos[tripIndex].datesMobile}</TripTitle>
            <CameraDetails lineHeight={props.isMobile ? "150%" : "120%"} fontSize={props.isMobile ? "90%" : "450%"}>{allPhotos[tripIndex].cameraTitle}</CameraDetails>
            <CameraDetails lineHeight={props.isMobile ? "150%" : "120%"} fontSize={props.isMobile ? "90%" : "450%"}>{allPhotos[tripIndex].filmTitle}</CameraDetails>
            
        </FlexColumn>
        
        
    )
    
}

export default SelectedTripDetails;