
import { FlexColumn } from "./styles/Flex.styles";

import SelectedTripGallery from "../subcomponents/SelectedTripGallery";

import SelectedTripGalleryHaGiang from "../subcomponents/SelectedTripGalleryHaGiang";

import SelectedTripGalleryNhaTrang from "../subcomponents/SelectedTripGalleryNhaTrang";

import SelectedTripGalleryDaNang from "../subcomponents/SelectedTripGalleryDaNang";

import SelectedTripGalleryHanoi from "../subcomponents/SelectedTripGalleryHanoi";

import SelectedTripGalleryPuLuong from "../subcomponents/SelectedTripGalleryPuLuong";
import SelectedTripGalleryMalaysia from "../subcomponents/SelectedTripGalleryMalaysia";

const SelectedTrip = (props) => { 

    console.log(props.tripIndex)
    

    var tripGallery; 

    if (props.tripIndex === 0) { 
        tripGallery = <SelectedTripGalleryMalaysia  isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryMalaysia>
    }  else if (props.tripIndex === 1) { 
        tripGallery = <SelectedTripGalleryHaGiang  isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryHaGiang>
    }  else if (props.tripIndex === 2) { 
        tripGallery = <SelectedTripGallery  isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGallery>
    } else if (props.tripIndex === 3)  { 
        tripGallery = <SelectedTripGalleryNhaTrang isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryNhaTrang>
    } else if (props.tripIndex === 4) { 
        tripGallery = <SelectedTripGalleryPuLuong isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryPuLuong>
    } else if (props.tripIndex === 5) { 
        tripGallery = <SelectedTripGalleryDaNang isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryDaNang>
    } else if (props.tripIndex === 6) { 
        tripGallery = <SelectedTripGalleryHanoi isMobile={props.isMobile} handleImageSelect={props.handleImageSelect} modalOpen={props.modalOpen} tripIndex={props.tripIndex} modalSource={props.modalSource}></SelectedTripGalleryHanoi>
    } 
    return (
        <FlexColumn>
            {tripGallery}
        </FlexColumn>
    )
}

export default SelectedTrip; 