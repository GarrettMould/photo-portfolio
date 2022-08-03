import Media from "react-media";

import {  Link } from "react-router-dom";

import { Padding } from "../components/styles/Container.styles";

import {
  GridContainer,
  GridRow,
  GridColumn,
} from "../components/styles/StyledGridSection.styled";

import { TripTitle, Image } from "./styles/TripsInformationALL.styled";

import { allPhotos } from "../Photos";

const TripsSection = (props) => {
  const mappedBlockPhotos = allPhotos.map((trip, i) => {
    return (
      
      <GridColumn size={props.isMobile ? "12" : "6"}>
        <Link style={{ textDecoration: 'none'}} to="/SelectedTrip" onClick={() => props.handleTripSelect(i)}>
          <TripTitle  key={i} fontSize={props.isMobile ? "90%" : "110%"} fontWeight="500" paddingBottom="1%">
            {trip.destinationMobile} &nbsp;<span>{trip.datesMobile}</span>
          </TripTitle>
          <Image  src={trip.blockPhoto}></Image>
        </Link>
      </GridColumn>
      
    );
  });

  
  return (
    
          
          <>
          <Padding top="10%"></Padding>
          <GridContainer width="100%" margin={props.isMobile ? "5% 0% 0% 0%" : "0%"}>
            <GridRow>{mappedBlockPhotos}</GridRow>
          </GridContainer>
          </>
        
  );
};

export default TripsSection;
