import { StyledNavBar } from "./styles/Header.styles";

const Header = (props) => {
  return (
    <StyledNavBar>
      <a href="#">
        <li>PHOTOS</li>
      </a>
      <a href="#">
        <li>TRIPS</li>
      </a>
      <a href="#">
        <li>ABOUT</li>
      </a>
    </StyledNavBar>
  );
};

export default Header;
