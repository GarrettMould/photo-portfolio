import styled from "styled-components";

export const ButtonReturn = styled.div`
  font-size: 120%;
  padding-top: 50px;
`;

export const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  align-items: center;

  @media only screen and (max-width: 599px) {
    justify-content: space-between;
    padding-bottom: 5%;
  }

  a {
    text-decoration: none;
    margin-left: 70px;

    @media only screen and (max-width: 599px) {
      margin-left: 0;
    }
  }

  li {
    font-size: 120%;
    list-style: none;

    @media only screen and (max-width: 599px) {
      font-size: 100%;
      padding-top: 20px;
    }
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
  @media only screen and (max-width: 599px) {
    li:active::after {
      width: 100%;
    }
  }
`;
