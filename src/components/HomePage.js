

import { Padding } from "./styles/Container.styles";

import MainMenuSection from "../subcomponents/MainMenuSection";


import TripsSection from "../subcomponents/TripsSection";

const HomePage = (props) => { 
    return (
        <>
    <Padding top="15%" left="10px" right="10px">
    <MainMenuSection></MainMenuSection>
    <TripsSection></TripsSection>
    </Padding>
    </>)
} 

export default HomePage;