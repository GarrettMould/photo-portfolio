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

const Hanoi = allPhotos[4];

const HanoiPhotos = allPhotos[4].photos;

const lowerCaseSummary = Hanoi.summary;

const final = lowerCaseSummary.toLowerCase();

console.log(final);
const ChosenTripHanoi = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <FlexRowCenter>
            <GridContainer>
              <GridRow>
                <GridColumn size="12">
                  <Image src={allPhotos[3].titlePhoto}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer alignItems="flex-start">
                    <ChosenTripTitle fontSize={400}>
                      {Hanoi.destination}
                    </ChosenTripTitle>
                    <ChosenTripDates>{Hanoi.dates}</ChosenTripDates>
                  </TripDetailsContainer>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <ChosenTripSummary>{Hanoi.summary}</ChosenTripSummary>
                  </TripDetailsContainer>
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
          </FlexRowCenter>
        ) : (
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
                <TripDetailsContainer
                  alignItems="center"
                  justifyContent="center"
                >
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
        )
      }
    </Media>
  );
};

export default ChosenTripHanoi;
