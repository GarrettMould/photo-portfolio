import {
  GridContainer,
  GridRow,
  GridColumn,
  Image,
} from "./styles/StyledGridSection.styled";

import { FlexRowCenter } from "./styles/Flex.styles";

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

import Media from "react-media";

const NhaTrang = photos[0];

const NhaTrangPhotos = photos[0].photos;

const ChosenTripNhaTrang = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <FlexRowCenter>
            <GridContainer>
              <GridRow>
                <GridColumn size="12">
                  <Image src={photos[0].titlePhoto}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer alignItems="flex-start">
                    <ChosenTripTitle fontSize={330}>
                      {NhaTrang.destination}
                    </ChosenTripTitle>
                    <ChosenTripDates>{NhaTrang.dates}</ChosenTripDates>
                  </TripDetailsContainer>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <ChosenTripSummary>{NhaTrang.summary}</ChosenTripSummary>
                  </TripDetailsContainer>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <Image src={NhaTrangPhotos[15].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[38].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[37].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[2].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[17].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[25].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[6].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <Image src={NhaTrangPhotos[26].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[36].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[19].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[30].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={NhaTrangPhotos[4].src}></Image>
                </GridColumn>
              </GridRow>
            </GridContainer>
          </FlexRowCenter>
        ) : (
          <GridContainer>
            <GridRow>
              <GridColumn size="8">
                <Image src={photos[0].titlePhoto}></Image>
              </GridColumn>
              <GridColumn size="4">
                <TripDetailsContainer alignItems="flex-end">
                  <ChosenTripTitle fontSize={380}>
                    {NhaTrang.destination}
                  </ChosenTripTitle>
                  <ChosenTripDates>{NhaTrang.dates}</ChosenTripDates>
                </TripDetailsContainer>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <TripDetailsContainer
                  alignItems="center"
                  justifyContent="center"
                >
                  <ChosenTripSummary>{NhaTrang.summary}</ChosenTripSummary>
                </TripDetailsContainer>
              </GridColumn>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[15].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[38].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[37].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[2].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[17].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[25].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[6].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="12">
                <Image src={NhaTrangPhotos[26].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[36].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[19].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[30].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={NhaTrangPhotos[4].src}></Image>
              </GridColumn>
            </GridRow>
          </GridContainer>
        )
      }
    </Media>
  );
};

export default ChosenTripNhaTrang;
