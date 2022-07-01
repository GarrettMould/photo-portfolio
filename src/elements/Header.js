import { StyledNavBar } from "./styles/Header.styles";

const Header = (props) => {
  return (
    <StyledNavBar>
      <a href="#photos">
        <li>PHOTOS</li>
      </a>
      <a href="#trips">
        <li>TRIPS</li>
      </a>
      <a href="#contact">
        <li>CONTACT</li>
      </a>
    </StyledNavBar>
  );
};

export default Header;
