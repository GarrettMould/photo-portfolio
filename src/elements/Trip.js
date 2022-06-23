import { StyledContainer } from "../components/styles/Container.styles";

import { FlexRow } from "../components/styles/Flex.styles";

import { Photo, TripDates, TripTitle } from "./styles/Trip.styles";

import { photos } from "../Photos";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Trip = (props) => {
  const mappedTrips = photos.map((trip, i) => {
    return (
      <>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <FlexRow>
              <div>
                <TripTitle>{trip.destination}</TripTitle>
                <TripDates>{trip.dates}</TripDates>
              </div>
              <div>
                <FlexRow>
                  <Photo src={trip.camera}></Photo>
                  <Photo src={trip.film}></Photo>
                </FlexRow>
              </div>
            </FlexRow>
          </TimelineContent>
        </TimelineItem>
      </>
    );
  });
  return <StyledContainer>{mappedTrips}</StyledContainer>;
};

export default Trip;
