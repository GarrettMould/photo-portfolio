import { NewGridContainer,  Image,  TripDetailsCell, GridItem, Modal, PageContainer } from "./styles/SelectedTripGallery.styled";

import SelectedTripDetails from "./SelectedTripDetails";

import { allPhotos } from "../Photos";






const SelectedTripGalleryHaGiang = (props) => { 
    var photos = allPhotos[0].photos;
    console.log(props.modalOpen)

    
    return (
    <PageContainer>
        {props.modalOpen ? <Modal><Image maxWidth="100%" src={props.modalSource}></Image></Modal> : <div></div> }
    <NewGridContainer gap={props.isMobile ? "1em" : "2em"} opacity={props.modalOpen ? "70%" : "100%"}>
        
        <TripDetailsCell><SelectedTripDetails tripIndex={props.tripIndex} isMobile={props.isMobile}></SelectedTripDetails></TripDetailsCell>
        <GridItem gridColumnStart={6}  gridColumnEnd={8} gridRowStart={1} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[34].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={5} gridRowStart={4} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[6].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={7} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[31].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={5} gridRowStart={7} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[2].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={10} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[22].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[27].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[1].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[1].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={3} gridRowStart={19} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[16].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={8} gridRowStart={19} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[14].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={3} gridRowStart={21} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[25].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={6} gridRowStart={24} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[49].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={27} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[54].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={2} gridColumnEnd={4} gridRowStart={31} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[8].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={8} gridRowStart={34} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[45].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={37} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[43].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={6} gridColumnEnd={8} gridRowStart={37} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[0].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={6} gridRowStart={39} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[44].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={3} gridRowStart={42} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[26].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={8} gridRowStart={42} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[32].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={44} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[20].src} onClick={props.handleImageSelect}></Image></GridItem>
    </NewGridContainer>
    </PageContainer>
        )
}

export default SelectedTripGalleryHaGiang; 