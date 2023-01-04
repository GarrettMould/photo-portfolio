import { NewGridContainer,  Image,  TripDetailsCell, GridItem, Modal, PageContainer } from "./styles/SelectedTripGallery.styled";

import SelectedTripDetails from "./SelectedTripDetails";

import { allPhotos } from "../Photos";






const SelectedTripGalleryMalaysia = (props) => { 
    var photos = allPhotos[0].photos;
    console.log(photos)
    console.log(props.modalOpen)

    
    return (
    <PageContainer>
        {props.modalOpen ? <Modal><Image maxWidth="100%" src={props.modalSource}></Image></Modal> : <div></div> }
    <NewGridContainer gap={props.isMobile ? "1em" : "2em"} opacity={props.modalOpen ? "70%" : "100%"}>
        
        <TripDetailsCell><SelectedTripDetails tripIndex={props.tripIndex} isMobile={props.isMobile}></SelectedTripDetails></TripDetailsCell>
        <GridItem gridColumnStart={6}  gridColumnEnd={8} gridRowStart={1} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[4].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={5} gridRowStart={4} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[16].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={7} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[10].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={5} gridRowStart={7} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[6].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={10} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[22].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[22].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[12].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={5} gridColumnEnd={8} gridRowStart={14} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[21].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={14} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[7].src} onClick={props.handleImageSelect}></Image></GridItem>  
        <GridItem gridColumnStart={1} gridColumnEnd={4} gridRowStart={16} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[3].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={7} gridColumnEnd={8} gridRowStart={16} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[26].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={3} gridColumnEnd={8} gridRowStart={19} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[19].src} onClick={props.handleImageSelect}></Image></GridItem>      
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={21} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[1].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={8} gridRowStart={21} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[2].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={24} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[19].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={26} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[15].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={7} gridColumnEnd={8} gridRowStart={26} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[20].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={4} gridRowStart={28} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[29].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={8} gridRowStart={30} ><Image cursor={props.modalOpen ? "default" : "zoom-in"} maxWidth="100%" src={photos[27].src} onClick={props.handleImageSelect}></Image></GridItem>
    </NewGridContainer>
    </PageContainer>
        )
}

export default SelectedTripGalleryMalaysia; 