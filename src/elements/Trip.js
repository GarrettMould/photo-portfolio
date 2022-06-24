import { StyledContainer } from "../components/styles/Container.styles";

import { StyledLink } from "./styles/Link.styled";

import { Photo, TripDates, TripTitle, CameraTitle, FilmTitle} from "./styles/Trip.styles";

import { photos } from "../Photos";

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Trip = (props) => {
  const mappedTrips = photos.map((trip, i) => {
    return (
      <>
        <TimelineItem>
          <TimelineOppositeContent sx={{width: 300, px: 4}}>
              
              <CameraTitle>{trip.cameraTitle}</CameraTitle>
              <FilmTitle>{trip.filmTitle}</FilmTitle>
              <StyledLink><button><a href="#"><li>View Photos</li></a></button></StyledLink>
             
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{width: 30,
          height: 30, bgcolor: "#fff01f"}}/>
          <TimelineConnector  sx={{
          height: 300}} />
        </TimelineSeparator>
        <TimelineContent sx={{width: 300, px: 4}} >
              <TripTitle>{trip.destination}</TripTitle>
              <TripDates>{trip.dates}</TripDates>
        </TimelineContent>
      </TimelineItem>
      </>
    );
  });
  return <div>{mappedTrips}</div>;
};

export default Trip;
