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

import { photos } from "../Photos";

const TripsTimeline = (props) => {
  const mappedTrips = photos.map((trip, i) => {
    return (
      <button onClick={props.handleClick}>
        <TripContainer>
          <TripLink>
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
          <TripsHeadline>Recent Trips</TripsHeadline>
          {mappedTrips}
        </FlexColumn>
      </StyledTripsTimeline>
    </>
  );
};

export default TripsTimeline;
