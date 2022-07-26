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

import { allPhotos } from "../Photos";

import Media from "react-media";

const DaNang = allPhotos[2];

const DaNangPhotos = allPhotos[2].photos;

const ChosenTripDaNang = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <FlexRowCenter>
            <GridContainer>
              <GridRow>
                <GridColumn size="12">
                  <Image src={DaNang.titlePhoto}></Image>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer alignItems="flex-start">
                    <ChosenTripTitle fontSize={330}>
                      {DaNang.destination}
                    </ChosenTripTitle>
                    <ChosenTripDates>{DaNang.dates}</ChosenTripDates>
                  </TripDetailsContainer>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn size="12">
                  <TripDetailsContainer
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
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
          </FlexRowCenter>
        ) : (
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
                <TripDetailsContainer
                  alignItems="center"
                  justifyContent="center"
                >
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
        )
      }
    </Media>
  );
};

export default ChosenTripDaNang;
