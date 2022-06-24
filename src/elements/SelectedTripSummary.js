import { StyledSelectedTripSummary } from "./styles/SelectedTripDetails.styled";

import { StyledContainer } from "../components/styles/Container.styles";

const SelectedTripSummary = (props) => { 
    return (
    <StyledContainer>
    <StyledSelectedTripSummary>{props.summary}</StyledSelectedTripSummary>
    </StyledContainer>
    )
}

export default SelectedTripSummary;