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
                <SelectedTripTitle>{props.destination}</SelectedTripTitle>
                <SelectedTripDates>{props.date}</SelectedTripDates>
            </SelectedTripDetailsContainer>
            <FlexRowBetween>
                <Photo src={props.camera}></Photo>
                <Photo src={props.film}></Photo>
            </FlexRowBetween>
        </FlexRowBetween>
        </StyledContainer>
  );
};

export default SelectedTripDetails;