import styled from "styled-components";

export const FooterContainer = styled.div.attrs((props) => ({
  padding: props.padding,
}))`
  padding: 7% 0% 5% 0%;

  @media only screen and (max-width: 599px) {
    padding: ${(props) => props.padding};
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
