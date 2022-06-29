import { StyledContainer } from "./styles/Container.styles";

import {
  SelectedTripTitle,
  SelectedTripDates,
  StyledSelectedTripSummary,
  Photo,
} from "../elements/styles/SelectedTripDetails.styled";

import { FlexRow } from "./styles/Flex.styles";
const Cameras = (props) => {
  return (
    <StyledContainer>
      <SelectedTripTitle>Canon Autoboy Luna XL</SelectedTripTitle>
      <SelectedTripDates></SelectedTripDates>
    </StyledContainer>
  );
};

export default Cameras;
