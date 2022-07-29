import {  Link } from "react-router-dom";

import { SiteSubTitle, SiteTitle } from "./styles/HeaderNew.styled";

import { FlexColumn } from "./styles/Flex.styles";
const HeaderNew = (props) => { 
    return (
        <FlexColumn>
            <Link style={{ textDecoration: 'none'}} to="/" onClick={props.handleTripSelect}>
            <SiteTitle>garrett mould</SiteTitle>
            <SiteSubTitle>35 mm film photography</SiteSubTitle>
            </Link>
        </FlexColumn>
    )
}; 

export default HeaderNew; 
