import {
  GridContainer,
  GridRow,
  GridColumn,
  Image,
} from "./styles/StyledGridSection.styled";

import HomeImage from "../images/ChosenTripHomeImages/hanoi.jpg";
import {
  ChosenTripTitle,
  ChosenTripDates,
  ChosenTripSummary,
  TripDetailsContainer,
  CameraDetailsContainer,
  CameraInformation,
} from "./styles/ChosenTrip.styles";

import { photos } from "../Photos";

const PuLuong = photos[1];

const PuLuongPhotos = photos[1].photos;

const ChosenTripPuLuong = (props) => {
  return (
    <GridContainer>
      <GridRow>
        <GridColumn size="8">
          <Image src={PuLuong.titlePhoto}></Image>
        </GridColumn>
        <GridColumn size="4">
          <TripDetailsContainer alignItems="flex-end">
            <ChosenTripTitle lineHeight={120} fontSize={600}>
              {PuLuong.destination}
            </ChosenTripTitle>
            <ChosenTripDates>{PuLuong.dates}</ChosenTripDates>
          </TripDetailsContainer>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <TripDetailsContainer alignItems="center" justifyContent="center">
            <ChosenTripSummary>{PuLuong.summary}</ChosenTripSummary>
          </TripDetailsContainer>
        </GridColumn>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[0].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[11].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[6].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[4].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[12].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="12">
          <Image src={PuLuongPhotos[8].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[15].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[17].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[12].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={PuLuongPhotos[18].src}></Image>
        </GridColumn>
      </GridRow>
    </GridContainer>
  );
};

export default ChosenTripPuLuong;
