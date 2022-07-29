import { FlexRowSpaceBetween } from "./styles/Flex.styles";

import { FooterItem, FooterContainer } from "./styles/Footer.styled";
const Footer = (props) => { 
    return (
        <FlexRowSpaceBetween><FooterItem>facebook</FooterItem><FooterItem>instagram</FooterItem><FooterItem>github</FooterItem></FlexRowSpaceBetween>
    )
}

export default Footer;