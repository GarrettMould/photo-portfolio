import { StyledNav, StyledLogo, StyledNavBar } from "./styles/Header.styles";
import { StyledContainer } from "./styles/Container.styles";

const Header = (props) => {
  return (
    <StyledContainer>
      <StyledNav>
        <button onClick={props.clearState}>
          <StyledLogo>myPhotos</StyledLogo>
        </button>
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
