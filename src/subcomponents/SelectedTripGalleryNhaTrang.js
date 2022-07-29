import { NewGridContainer,  Image,  TripDetailsCell, GridItem } from "./styles/SelectedTripGallery.styled";

import SelectedTripDetails from "./SelectedTripDetails";

import { allPhotos } from "../Photos";


const SelectedTripGalleryNhaTrang = (props) => { 
    var photos = allPhotos[1].photos;
    
    return (
    <NewGridContainer>
        <TripDetailsCell><SelectedTripDetails tripIndex={props.tripIndex}></SelectedTripDetails></TripDetailsCell>
        <GridItem gridColumnStart={6}  gridColumnEnd={8} gridRowStart={1} ><Image maxWidth="100%" src={photos[1].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={5} gridRowStart={4} ><Image maxWidth="100%" src={photos[18].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={7} ><Image maxWidth="100%" src={photos[6].src}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={5} gridRowStart={7} ><Image maxWidth="100%" src={photos[39].src}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={10} ><Image maxWidth="100%" src={photos[31].src}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image maxWidth="100%" src={photos[24].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image maxWidth="100%" src={photos[40].src}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image maxWidth="100%" src={photos[27].src}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image maxWidth="100%" src={photos[16].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={3} gridRowStart={19} ><Image maxWidth="100%" src={photos[13].src}></Image></GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={8} gridRowStart={19} ><Image maxWidth="100%" src={photos[3].src}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={3} gridRowStart={21} ><Image maxWidth="100%" src={photos[8].src}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={6} gridRowStart={24} ><Image maxWidth="100%" src={photos[37].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={27} ><Image maxWidth="100%" src={photos[27].src}></Image></GridItem>
        <GridItem gridColumnStart={2} gridColumnEnd={4} gridRowStart={31} ><Image maxWidth="100%" src={photos[8].src}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={8} gridRowStart={34} ><Image maxWidth="100%" src={photos[19].src}></Image></GridItem>
        
    </NewGridContainer>
        )
}

export default SelectedTripGalleryNhaTrang; 