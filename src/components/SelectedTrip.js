
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
        tripGallery = <SelectedTripGallery  isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGallery>
    } else if (props.tripIndex === 1)  { 
        tripGallery = <SelectedTripGalleryNhaTrang isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryNhaTrang>
    } else if (props.tripIndex === 2) { 
        tripGallery = <SelectedTripGalleryPuLuong isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryPuLuong>
    } else if (props.tripIndex === 3) { 
        tripGallery = <SelectedTripGalleryDaNang isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryDaNang>
    } else if (props.tripIndex === 4) { 
        tripGallery = <SelectedTripGalleryHanoi isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryHanoi>
    } 
    return (
        <FlexColumn>
            {tripGallery}
        </FlexColumn>
    )
}

export default SelectedTrip; 