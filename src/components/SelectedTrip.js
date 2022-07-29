import { FlexColumn } from "./styles/Flex.styles";

import SelectedTripDetails from "../subcomponents/SelectedTripDetails";
import SelectedTripGallery from "../subcomponents/SelectedTripGallery";

const SelectedTrip = (props) => { 
    return (
        <FlexColumn>
           
            <SelectedTripGallery></SelectedTripGallery>
        </FlexColumn>
    )
}

export default SelectedTrip; 