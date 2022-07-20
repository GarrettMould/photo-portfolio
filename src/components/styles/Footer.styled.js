import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 5% 0% 3% 0%;

  @media only screen and (max-width: 599px) {
    padding: 18% 0% 8% 0%;
  }
`;

export const FooterItem = styled.div`
  padding-left: 5%;
  font-size: 140%;
  font-weight: 600;

  @media only screen and (max-width: 599px) {
    font-size: 100%;
    font-weight: 600;
    padding-left: 0%;
  }

  a,
  a:hover {
    text-decoration: none;
    color: #121212;
  }
`;

export const FooterFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media only screen and (max-width: 599px) {
    justify-content: space-between;
  }
`;
