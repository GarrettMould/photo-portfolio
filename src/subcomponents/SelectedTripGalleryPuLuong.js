import { NewGridContainer,  Image,  TripDetailsCell, GridItem, PageContainer, Modal} from "./styles/SelectedTripGallery.styled";

import SelectedTripDetails from "./SelectedTripDetails";

import { allPhotos } from "../Photos";


const SelectedTripGalleryPuLuong = (props) => { 
    var photos = allPhotos[2].photos;
    
    return (
    <PageContainer>
        {props.modalOpen ? <Modal><Image maxWidth="100%" src={props.modalSource}></Image></Modal> : <div></div> }
    <NewGridContainer gridAutoRows={props.isMobile ? "80px" : "250px"} opacity={props.modalOpen ? "70%" : "100%"}>
        <TripDetailsCell><SelectedTripDetails tripIndex={props.tripIndex}></SelectedTripDetails></TripDetailsCell>
        <GridItem gridColumnStart={6}  gridColumnEnd={8} gridRowStart={1} ><Image maxWidth="100%" src={photos[7].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={5} gridRowStart={4} ><Image maxWidth="100%" src={photos[11].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={7} ><Image maxWidth="100%" src={photos[2].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={5} gridRowStart={7} ><Image maxWidth="100%" src={photos[14].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={10} ><Image maxWidth="100%" src={photos[5].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image maxWidth="100%" src={photos[18].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image maxWidth="100%" src={photos[4].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image maxWidth="100%" src={photos[12].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={3} gridRowStart={19} ><Image maxWidth="100%" src={photos[6].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={8} gridRowStart={19} ><Image maxWidth="100%" src={photos[15].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={3} gridRowStart={21} ><Image maxWidth="100%" src={photos[17].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={6} gridRowStart={24} ><Image maxWidth="100%" src={photos[16].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={27} ><Image maxWidth="100%" src={photos[1].src} onClick={props.handleImageSelect}></Image></GridItem>
        <GridItem gridColumnStart={2} gridColumnEnd={4} gridRowStart={31} ><Image maxWidth="100%" src={photos[3].src} onClick={props.handleImageSelect}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={8} gridRowStart={34} ><Image maxWidth="100%" src={photos[9].src} onClick={props.handleImageSelect}></Image></GridItem>
        
    </NewGridContainer>
    </PageContainer>
        )
}

export default SelectedTripGalleryPuLuong; 