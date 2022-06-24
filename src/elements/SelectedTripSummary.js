import { StyledSelectedTripSummary } from "./styles/SelectedTripDetails.styled";

import { StyledContainer } from "../components/styles/Container.styles";

const SelectedTripSummary = (props) => { 
    return (
    <StyledContainer>
    <StyledSelectedTripSummary>This trip included an eventful three-day vacation to Nha Trang, as well as my first trip overseas since before the pandemic. I saw a bit of everything, from beaches, to waterfalls, to the impressive Singaporean architecture.</StyledSelectedTripSummary>
    </StyledContainer>
    )
}

export default SelectedTripSummary;