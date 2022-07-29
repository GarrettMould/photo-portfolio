
import { FlexColumn } from "./styles/Flex.styles";

import SelectedTripGallery from "../subcomponents/SelectedTripGallery";

import SelectedTripGalleryNhaTrang from "../subcomponents/SelectedTripGalleryNhaTrang";

import SelectedTripGalleryDaNang from "../subcomponents/SelectedTripGalleryDaNang";

import SelectedTripGalleryHanoi from "../subcomponents/SelectedTripGalleryHanoi";

import SelectedTripGalleryPuLuong from "../subcomponents/SelectedTripGalleryPuLuong";

const SelectedTrip = (props) => { 

    console.log(props.tripIndex)

    var tripGallery; 

    if (props.tripIndex === 0) { 
        tripGallery = <SelectedTripGallery tripIndex={props.tripIndex}></SelectedTripGallery>
    } else if (props.tripIndex === 1)  { 
        tripGallery = <SelectedTripGalleryNhaTrang tripIndex={props.tripIndex}></SelectedTripGalleryNhaTrang>
    } else if (props.tripIndex === 2) { 
        tripGallery = <SelectedTripGalleryPuLuong tripIndex={props.tripIndex}></SelectedTripGalleryPuLuong>
    } else if (props.tripIndex === 3) { 
        tripGallery = <SelectedTripGalleryDaNang tripIndex={props.tripIndex}></SelectedTripGalleryDaNang>
    } else if (props.tripIndex === 4) { 
        tripGallery = <SelectedTripGalleryHanoi tripIndex={props.tripIndex}></SelectedTripGalleryHanoi>
    } 
    return (
        <FlexColumn>
            {tripGallery}
        </FlexColumn>
    )
}

export default SelectedTrip; 