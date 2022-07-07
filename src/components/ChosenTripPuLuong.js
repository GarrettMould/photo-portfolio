import {
  GridContainer,
  GridRow,
  GridColumn,
  Image,
} from "./styles/StyledGridSection.styled";

import { FlexRowCenter } from "./styles/Flex.styles";

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

const PuLuong = photos[1];

const PuLuongPhotos = photos[1].photos;

const ChosenTripPuLuong = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <FlexRowCenter>
            <GridContainer>
              <GridRow>
                <GridColumn size="12">
                  <Image src={PuLuong.titlePhoto}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <TripDetailsContainer alignItems="flex-start">
                  <ChosenTripTitle lineHeight={120} fontSize={600}>
                    {PuLuong.destination}
                  </ChosenTripTitle>
                  <ChosenTripDates>{PuLuong.dates}</ChosenTripDates>
                </TripDetailsContainer>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <ChosenTripSummary>{PuLuong.summary}</ChosenTripSummary>
                  </TripDetailsContainer>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={PuLuongPhotos[5].src}></Image>
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
                <GridColumn size="12">
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
                  <Image src={PuLuongPhotos[4].src}></Image>
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
          </FlexRowCenter>
        ) : (
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
                <TripDetailsContainer
                  alignItems="center"
                  justifyContent="center"
                >
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
        )
      }
    </Media>
  );
};

export default ChosenTripPuLuong;
