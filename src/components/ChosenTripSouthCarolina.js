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

import { allPhotos } from "../Photos";

import Media from "react-media";

const SouthCarolina = allPhotos[0];

const SouthCarolinaPhotos = allPhotos[0].photos;

const ChosenTripSouthCarolina = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <FlexRowCenter>
            <GridContainer>
              <GridRow>
                <GridColumn size="12">
                  <Image src={SouthCarolina.titlePhoto}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer alignItems="flex-start">
                    <ChosenTripTitle fontSize={320}>
                      {SouthCarolina.destination}
                    </ChosenTripTitle>
                    <ChosenTripDates>{SouthCarolina.dates}</ChosenTripDates>
                  </TripDetailsContainer>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <ChosenTripSummary>
                      {SouthCarolina.summary}
                    </ChosenTripSummary>
                  </TripDetailsContainer>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <Image src={SouthCarolinaPhotos[12].src}></Image>
                </GridColumn>
              </GridRow>

              <GridRow>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[26].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[20].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[13].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[21].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <Image src={SouthCarolinaPhotos[15].src}></Image>
                </GridColumn>
              </GridRow>

              <GridRow>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[24].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[27].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[14].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[19].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <Image src={SouthCarolinaPhotos[16].src}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[6].src}></Image>
                </GridColumn>
                <GridColumn size="6">
                  <Image src={SouthCarolinaPhotos[29].src}></Image>
                </GridColumn>
              </GridRow>
            </GridContainer>
          </FlexRowCenter>
        ) : (
          <GridContainer>
            <GridRow>
              <GridColumn size="8">
                <Image src={SouthCarolina.titlePhoto}></Image>
              </GridColumn>
              <GridColumn size="4">
                <TripDetailsContainer alignItems="flex-end">
                  <ChosenTripTitle lineHeight={150} fontSize={450}>
                    {SouthCarolina.destination}
                  </ChosenTripTitle>
                  <ChosenTripDates>{SouthCarolina.dates}</ChosenTripDates>
                </TripDetailsContainer>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="12">
                <Image src={SouthCarolinaPhotos[12].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <TripDetailsContainer
                  alignItems="center"
                  justifyContent="center"
                >
                  <ChosenTripSummary>{SouthCarolina.summary}</ChosenTripSummary>
                </TripDetailsContainer>
              </GridColumn>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[8].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[26].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[20].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[13].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[21].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="12">
                <Image src={SouthCarolinaPhotos[15].src}></Image>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[24].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[27].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[14].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[19].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="12">
                <Image src={SouthCarolinaPhotos[16].src}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[6].src}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={SouthCarolinaPhotos[29].src}></Image>
              </GridColumn>
            </GridRow>
          </GridContainer>
        )
      }
    </Media>
  );
};

export default ChosenTripSouthCarolina;
