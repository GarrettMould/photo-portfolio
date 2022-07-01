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

const DaNang = photos[2];

const DaNangPhotos = photos[2].photos;

const ChosenTripDaNang = (props) => {
  return (
    <GridContainer>
      <GridRow>
        <GridColumn size="8">
          <Image src={DaNang.titlePhoto}></Image>
        </GridColumn>
        <GridColumn size="4">
          <TripDetailsContainer alignItems="flex-end">
            <ChosenTripTitle lineHeight={150} fontSize={450}>
              {DaNang.destination}
            </ChosenTripTitle>
            <ChosenTripDates>{DaNang.dates}</ChosenTripDates>
          </TripDetailsContainer>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="12">
          <Image src={DaNangPhotos[3].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={DaNangPhotos[20].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <TripDetailsContainer alignItems="center" justifyContent="center">
            <ChosenTripSummary>{DaNang.summary}</ChosenTripSummary>
          </TripDetailsContainer>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={DaNangPhotos[2].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={DaNangPhotos[24].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={DaNangPhotos[4].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={DaNangPhotos[12].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="12">
          <Image src={DaNangPhotos[21].src}></Image>
        </GridColumn>
      </GridRow>

      <GridRow>
        <GridColumn size="6">
          <Image src={DaNangPhotos[14].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={DaNangPhotos[7].src}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={DaNangPhotos[12].src}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={DaNangPhotos[19].src}></Image>
        </GridColumn>
      </GridRow>
    </GridContainer>
  );
};

export default ChosenTripDaNang;
