import { StyledNavBar } from "./styles/NavBarNew.styled";

const NavBarNew = (props) => { 
    return (
      <StyledNavBar>
        <a href="#">
        <li>photos</li>
      </a>
      <a href="#">
        <li>trips</li>
      </a>
      <a href="#">
        <li>contact</li>
      </a>
      </StyledNavBar> 
    )
};

export default NavBarNew; 