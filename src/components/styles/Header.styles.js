import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0px 70px 0px;
`;

export const StyledLogo = styled.div`
  font-size: 100%;
  font-weight: 400;
`;

export const StyledNavBar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li {
    font-size: 60%;
    list-style: none;
  }

  li:hover {
    border-bottom: 2px solid #fff;
  }
`;
