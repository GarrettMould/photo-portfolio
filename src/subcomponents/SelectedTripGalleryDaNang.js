import { NewGridContainer,  Image,  TripDetailsCell, GridItem, PageContainer, Modal } from "./styles/SelectedTripGallery.styled";

import SelectedTripDetails from "./SelectedTripDetails";

import { FlexColumn } from "../components/styles/Flex.styles";

import { allPhotos} from "../Photos";


const SelectedTripGalleryDaNang = (props) => { 
    var photos = allPhotos[3].photos
    
    return (
        <>
        <FlexColumn>
    <PageContainer>
        {props.modalOpen ? <Modal><Image maxWidth="100%" src={props.modalSource}></Image></Modal> : <div></div> }
    <NewGridContainer gap={props.isMobile ? "1em" : "2em"} opacity={props.modalOpen ? "70%" : "100%"}>
        <TripDetailsCell><SelectedTripDetails tripIndex={props.tripIndex} isMobile={props.isMobile}></SelectedTripDetails></TripDetailsCell>
        <GridItem gridColumnStart={6}  gridColumnEnd={8} gridRowStart={1} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[26].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={5} gridRowStart={4} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[11].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={7} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[23].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={5} gridRowStart={7} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[2].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={4} gridRowStart={10} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[9].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={13} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[19].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={17} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[12].src} onClick={props.handleImageSelect}></Image></GridItem> 
    
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={20} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[20].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={2} gridColumnEnd={4} gridRowStart={24} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[16].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={8} gridRowStart={27} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[18].src} onClick={props.handleImageSelect}></Image></GridItem>
        
    </NewGridContainer>
    
    </PageContainer>
    
    </FlexColumn>
    </>
        )
}

export default SelectedTripGalleryDaNang; 