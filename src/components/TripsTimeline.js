import {
  StyledTripsTimeline,
  TripContainer,
  TripDates,
  TripLink,
  TripsHeadline,
  TripTitle,
} from "./styles/TripsTimeline.styled";

import { FlexColumn } from "./styles/Flex.styles";

import { Padding } from "./styles/Container.styles";

import { allPhotos } from "../Photos";

const TripsTimeline = (props) => {
  const mappedTrips = allPhotos.map((trip, i) => {
    return (
      <button onClick={props.handleClick}>
        <TripContainer id={i}>
          <TripLink id={i}>
            <TripTitle id={i}>{trip.destination}</TripTitle>
            <TripDates id={i}>{trip.dates}</TripDates>
          </TripLink>
        </TripContainer>
      </button>
    );
  });
  return (
    <>
      <StyledTripsTimeline>
        <FlexColumn>
          <TripsHeadline>RECENT TRIPS</TripsHeadline>
          {mappedTrips}
        </FlexColumn>
      </StyledTripsTimeline>
    </>
  );
};

export default TripsTimeline;
