import { NewGridContainer,  Image,  TripDetailsCell, GridItem, PageContainer, Modal } from "./styles/SelectedTripGallery.styled";

import SelectedTripDetails from "./SelectedTripDetails";

import { allPhotos } from "../Photos";


const SelectedTripGalleryHanoi = (props) => { 
    var photos = allPhotos[6].photos;
    
    return (
    <PageContainer>
        {props.modalOpen ? <Modal><Image maxWidth="100%" src={props.modalSource}></Image></Modal> : <div></div> }
    <NewGridContainer gap={props.isMobile ? "1em" : "2em"} opacity={props.modalOpen ? "70%" : "100%"}>
        <TripDetailsCell><SelectedTripDetails tripIndex={props.tripIndex} isMobile={props.isMobile}></SelectedTripDetails></TripDetailsCell>
        <GridItem gridColumnStart={6}  gridColumnEnd={8} gridRowStart={1} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[21].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={5} gridRowStart={3} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[20].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={6} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[12].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={5} gridRowStart={6} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[5].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={9} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[15].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[8].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[16].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={3} gridRowStart={19} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[11].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={8} gridRowStart={19} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[4].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={5} gridRowStart={21} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[10].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={6} gridRowStart={24} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[18].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={27} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[0].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={2} gridColumnEnd={4} gridRowStart={31} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[14].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={6} gridRowStart={34} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[3].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={2} gridColumnEnd={3} gridRowStart={37} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[17].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={5} gridColumnEnd={7} gridRowStart={39} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[6].src} onClick={props.handleImageSelect}></Image></GridItem>
    </NewGridContainer>
    </PageContainer>
        )
}

export default SelectedTripGalleryHanoi; 