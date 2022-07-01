import styled from "styled-components";

export const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  align-items: center;

  a {
    text-decoration: none;
    margin-left: 70px;
  }

  li {
    font-size: 120%;
    list-style: none;
  }

  li::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: #121212;
    transition: width 0.3s;
  }

  li:hover::after {
    width: 100%;
  }
`;
