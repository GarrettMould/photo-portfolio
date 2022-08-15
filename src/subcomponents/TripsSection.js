

import {  Link } from "react-router-dom";

import { Padding } from "../components/styles/Container.styles";


import { FlexContainer, FlexItem } from "./styles/TripsSection.styled";


import { TripTitle, Image } from "./styles/TripsInformationALL.styled";

import { allPhotos } from "../Photos";

const TripsSection = (props) => {
  const mappedBlockPhotos = allPhotos.map((trip, i) => {
    return (
      
      <FlexItem>
        <Link style={{ textDecoration: 'none'}} to="/SelectedTrip" onClick={() => props.handleTripSelect(i)}>
          <TripTitle  key={i} fontSize={props.isMobile ? "90%" : "110%"} fontWeight="500" paddingBottom="1%">
            {trip.destinationMobile} &nbsp;<span>{trip.datesMobile}</span>
          </TripTitle>
          <Image  src={trip.blockPhoto}></Image>
        </Link>
        </FlexItem>
      
    );
  });

  
  return (
    
          
          <>
          <Padding top="10%"></Padding>
          <FlexContainer>
            {mappedBlockPhotos}
          </FlexContainer>
          </>
        
  );
};

export default TripsSection;
