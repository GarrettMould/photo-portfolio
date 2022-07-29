import { NewGridContainer,  Image,  TripDetailsCell, GridItem } from "./styles/SelectedTripGallery.styled";

import SelectedTripDetails from "./SelectedTripDetails";

import { allPhotos } from "../Photos";


const SelectedTripGallery = (props) => { 
    var photos = allPhotos[0].photos;
    console.log(photos[0].src)
    return (
    <NewGridContainer>
        <TripDetailsCell><SelectedTripDetails></SelectedTripDetails></TripDetailsCell>
        <GridItem gridColumnStart={6}  gridColumnEnd={8} gridRowStart={1} ><Image maxWidth="100%" src={photos[20].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={5} gridRowStart={4} ><Image maxWidth="100%" src={photos[12].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={7} ><Image maxWidth="100%" src={photos[13].src}></Image></GridItem>
        <GridItem gridColumnStart={4} gridColumnEnd={5} gridRowStart={7} ><Image maxWidth="100%" src={photos[2].src}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={2} gridRowStart={10} ><Image maxWidth="100%" src={photos[15].src}></Image></GridItem>
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image maxWidth="100%" src={photos[29].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={12} ><Image maxWidth="100%" src={photos[29].src}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image maxWidth="100%" src={photos[1].src}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={5} gridRowStart={16} ><Image maxWidth="100%" src={photos[1].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={3} gridRowStart={19} ><Image maxWidth="100%" src={photos[16].src}></Image></GridItem>
        <GridItem gridColumnStart={6} gridColumnEnd={8} gridRowStart={19} ><Image maxWidth="100%" src={photos[14].src}></Image></GridItem> 
        <GridItem gridColumnStart={2} gridColumnEnd={3} gridRowStart={21} ><Image maxWidth="100%" src={photos[25].src}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={6} gridRowStart={24} ><Image maxWidth="100%" src={photos[30].src}></Image></GridItem> 
        <GridItem gridColumnStart={1} gridColumnEnd={8} gridRowStart={27} ><Image maxWidth="100%" src={photos[27].src}></Image></GridItem>
        <GridItem gridColumnStart={2} gridColumnEnd={4} gridRowStart={31} ><Image maxWidth="100%" src={photos[8].src}></Image></GridItem> 
        <GridItem gridColumnStart={3} gridColumnEnd={8} gridRowStart={34} ><Image maxWidth="100%" src={photos[19].src}></Image></GridItem>
        
    </NewGridContainer>
        )
}

export default SelectedTripGallery; 