import { Padding } from "./styles/Container.styles";

import MainMenuSection from "../subcomponents/MainMenuSection";


import TripsSection from "../subcomponents/TripsSection";

const HomePage = (props) => { 
    return (
        <>
        <Padding top="15%"></Padding>
    <MainMenuSection></MainMenuSection>
    <TripsSection></TripsSection>
    </>)
} 

export default HomePage;