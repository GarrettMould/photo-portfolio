import { FlexColumn, FlexRowBetween } from "../components/styles/Flex.styles";
import { TripTitle } from "./styles/TripsInformationALL.styled";

const SelectedTripDetails = (props) => { 
    return (
        
        <FlexColumn>
            <TripTitle fontSize="90%" fontWeight="500" paddingBottom="0%">south carolina</TripTitle>
            <TripTitle fontSize="90%" fontWeight="500" paddingBottom="1%"><span>july 2022</span></TripTitle>
            <TripTitle fontSize="90%" fontWeight="500"  paddingBottom="0%"><span>canon autoboy luna xl</span></TripTitle>
            <TripTitle fontSize="90%" fontWeight="500"  paddingBottom="1%"><span>fuji superia 400</span></TripTitle>
        </FlexColumn>
        
        
    )
    
}

export default SelectedTripDetails;