import { StyledContainer } from "../components/styles/Container.styles";

import {  FlexRowBetween } from "../components/styles/Flex.styles";

import CanonAutoboy from "../images/canon_autoboy.png";
import KodakGold200 from "../images/kodak_gold200.png";
import FujiSuperia400 from "../images/fuji_color_superia_400.png";

import { SelectedTripDetailsContainer, SelectedTripDates, SelectedTripTitle, Photo } from "./styles/SelectedTripDetails.styled";
const SelectedTripDetails = (props) => {
  return (
    <StyledContainer>
        <FlexRowBetween>
            <SelectedTripDetailsContainer>
                <SelectedTripTitle>Nha Trang & Singapore</SelectedTripTitle>
                <SelectedTripDates>June 8th - June 14th</SelectedTripDates>
            </SelectedTripDetailsContainer>
            <FlexRowBetween>
                <Photo src={CanonAutoboy}></Photo>
                <Photo src={FujiSuperia400}></Photo>
            </FlexRowBetween>
        </FlexRowBetween>
        </StyledContainer>
  );
};

export default SelectedTripDetails;