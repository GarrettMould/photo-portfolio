import {
  FooterItem,
  FooterContainer,
  FooterFlex,
} from "./styles/Footer.styled";

const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterFlex>
        <FooterItem>
          <a href="#">Facebook</a>
        </FooterItem>
        <FooterItem>
          <a href="#">Instagram</a>
        </FooterItem>
        <FooterItem>
          <a href="#">Github</a>
        </FooterItem>
      </FooterFlex>
    </FooterContainer>
  );
};

export default Footer;
