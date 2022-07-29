import { SiteSubTitle, SiteTitle } from "./styles/HeaderNew.styled";

import { FlexColumn } from "./styles/Flex.styles";
const HeaderNew = (props) => { 
    return (
        <FlexColumn>
            <SiteTitle>garrett mould</SiteTitle>
            <SiteSubTitle>35 mm film photography</SiteSubTitle>
        </FlexColumn>
    )
}; 

export default HeaderNew; 
