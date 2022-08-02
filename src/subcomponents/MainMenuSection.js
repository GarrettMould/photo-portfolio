

import NavBarNew from "../elements/NavBarNew";

import PhotoCarousel from "../elements/PhotoCarousel";

const MainMenuSection = (props) => { 
    return (
    <>
    <NavBarNew></NavBarNew>
    {props.isMobile ? <PhotoCarousel isMobile={props.isMobile}></PhotoCarousel> : <></>}
    </>
    )
    
}

export default MainMenuSection;