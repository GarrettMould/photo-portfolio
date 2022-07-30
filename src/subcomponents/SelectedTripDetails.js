import { FlexColumn, FlexRowBetween } from "../components/styles/Flex.styles";
import { TripTitle, CameraDetails } from "./styles/TripsInformationALL.styled";

import { allPhotos } from "../Photos";

const SelectedTripDetails = (props) => { 
    var tripIndex = props.tripIndex
    
    return (
        
        <FlexColumn>
            <TripTitle fontSize="90%" fontWeight="500" paddingBottom="0%">{allPhotos[tripIndex].destinationMobile}</TripTitle>
            <TripTitle fontSize="90%" fontWeight="500" paddingBottom="0%"><span>{allPhotos[tripIndex].datesMobile}</span></TripTitle>
            <CameraDetails>{allPhotos[tripIndex].cameraTitle}</CameraDetails>
            <CameraDetails>{allPhotos[tripIndex].filmTitle}</CameraDetails>
            
        </FlexColumn>
        
        
    )
    
}

export default SelectedTripDetails;