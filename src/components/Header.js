import {
  nav,
  logo,
  StyledNav,
  StyledLogo,
  StyledNavBar,
} from "./styles/Header.styles";
import { StyledContainer } from "./styles/Container.styles";

const Header = (props) => {
  return (
    <StyledContainer>
      <StyledNav>
        <StyledLogo>myPhotos</StyledLogo>
        <StyledNavBar>
          <a href="#">
            <li>cameras</li>
          </a>
          <a href="#">
            <li>trips</li>
          </a>
          <a href="#">
            <li>about</li>
          </a>
        </StyledNavBar>
      </StyledNav>
    </StyledContainer>
  );
};

export default Header;
