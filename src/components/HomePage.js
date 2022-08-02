
import { FlexColumn, FlexRowSpaceBetween } from "./styles/Flex.styles";
import { Padding } from "./styles/Container.styles";

import MainMenuSection from "../subcomponents/MainMenuSection";


import TripsSection from "../subcomponents/TripsSection";



const HomePage = (props) => { 

    var display; 

    {props.isMobile ? display = <><MainMenuSection isMobile={props.isMobile}></MainMenuSection>
    <TripsSection handleTripSelect={props.handleTripSelect} isMobile={props.isMobile}></TripsSection></> : display = <FlexRowSpaceBetween>
        <MainMenuSection isMobile={props.isMobile}></MainMenuSection>
        <TripsSection handleTripSelect={props.handleTripSelect} isMobile={props.isMobile}></TripsSection>
        </FlexRowSpaceBetween>}

    return (
        <>

    <Padding top={props.isMobile ? "15%" : "5%"} left="10px" right="10px">
    {display}
    </Padding>
    </>)
} 

export default HomePage;