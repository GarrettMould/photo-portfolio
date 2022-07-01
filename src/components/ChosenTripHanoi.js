import {
  GridContainer,
  GridRow,
  GridColumn,
  Image,
} from "./styles/StyledGridSection.styled";

import {
  ChosenTripTitle,
  ChosenTripDates,
  ChosenTripSummary,
  TripDetailsContainer,
  CameraDetailsContainer,
  CameraInformation,
} from "./styles/ChosenTrip.styles";

import { photos } from "../Photos";

const Hanoi = photos[3];

const HanoiPhotos = photos[3].photos;

const ChosenTripHanoi = (props) => {
  return (
    <GridContainer>
      <GridRow>
        <GridColumn size="8">
          <Image src={Hanoi.titlePhoto}></Image>
        </GridColumn>
        <GridColumn size="4">
          <TripDetailsContainer alignItems="flex-end">
            <ChosenTripTitle fontSize={650}>
              {Hanoi.destination}
            </ChosenTripTitle>
            <ChosenTripDates>{Hanoi.dates}</ChosenTripDates>
          </TripDetailsContainer>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <TripDetailsContainer alignItems="center" justifyContent="center">
            <ChosenTripSummary>{Hanoi.summary}</ChosenTripSummary>
          </TripDetailsContainer>
        </GridColumn>
        <GridColumn size="6">
          <Image src={HanoiPhotos[9].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={HanoiPhotos[12].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={HanoiPhotos[5].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="12">
          <Image src={HanoiPhotos[8].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={HanoiPhotos[0].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={HanoiPhotos[6].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={HanoiPhotos[11].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={HanoiPhotos[10].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="12">
          <Image src={HanoiPhotos[18].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={HanoiPhotos[17].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={HanoiPhotos[16].src}></Image>
        </GridColumn>
      </GridRow>
    </GridContainer>
  );
};

export default ChosenTripHanoi;
