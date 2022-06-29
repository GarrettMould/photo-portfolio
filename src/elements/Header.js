import { StyledNavBar } from "./styles/Header.styles";

const Header = (props) => {
  return (
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
  );
};

export default Header;
