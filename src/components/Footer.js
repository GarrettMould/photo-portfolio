import {
  FooterItem,
  FooterContainer,
  FooterFlex,
} from "./styles/Footer.styled";

const Footer = (props) => {
  return (
    <FooterContainer id="contact">
      <FooterFlex>
        <FooterItem>
          <a href="https://www.facebook.com/garrett.mould/" target="_blank">
            FACEBOOK
          </a>
        </FooterItem>
        <FooterItem>
          <a href="https://www.instagram.com/garrettmould/" target="_blank">
            INSTAGRAM
          </a>
        </FooterItem>
        <FooterItem>
          <a href="https://github.com/GarrettMould" target="_blank">
            GITHUB
          </a>
        </FooterItem>
      </FooterFlex>
    </FooterContainer>
  );
};

export default Footer;
