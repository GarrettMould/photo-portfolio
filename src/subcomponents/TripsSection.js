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
      
      <GridColumn size="3">
        <Link style={{ textDecoration: 'none'}} to="/SelectedTrip" onClick={() => props.handleTripSelect(i)}>
          <TripTitle  key={i} fontSize="90%" fontWeight="500" paddingBottom="1%">
            {trip.destinationMobile} &nbsp;<span>{trip.datesMobile}</span>
          </TripTitle>
          <Image  src={trip.blockPhoto}></Image>
        </Link>
      </GridColumn>
      
    );
  });

  const mappedBlockPhotosMobile = allPhotos.map((trip, i) => {
    return (
     
      <GridColumn size="12">
        <Link style={{ textDecoration: 'none'}} to="/SelectedTrip" onClick={() => props.handleTripSelect(i)}>
          <TripTitle fontSize="90%" fontWeight="500" paddingBottom="1%">
            {trip.destinationMobile} 	&nbsp; <span>{trip.datesMobile}</span>
          </TripTitle>
          <Image  src={trip.blockPhoto}></Image>
        </Link>
      </GridColumn>
      
    );
  });
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <>
          <Padding top="10%"></Padding>
          <GridContainer>
            <GridRow>{mappedBlockPhotosMobile}</GridRow>
          </GridContainer>
          </>
        ) : (
          <>
          <Padding top="10%"></Padding>
          <GridContainer>
            <GridRow>{mappedBlockPhotos}</GridRow>
          </GridContainer>
          </>
        )
      }
    </Media>
  );
};

export default TripsSection;
