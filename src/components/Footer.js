
import { FlexRowSpaceBetween } from "./styles/Flex.styles";

import { FooterItem, FooterContainer, ContactTitle, CopyrightContainer, Copyright, ContactLinksContainer } from "./styles/Footer.styled";
const Footer = (props) => { 
    return (
       <FooterContainer>
        <ContactLinksContainer><FooterItem><a href="#">facebook</a></FooterItem><FooterItem><a href="#">instagram</a></FooterItem><FooterItem><a href="#">github</a></FooterItem></ContactLinksContainer>
        <CopyrightContainer><Copyright> <span>&copy;</span>&nbsp;2022</Copyright></CopyrightContainer>
       </FooterContainer> 
    )
}

export default Footer;