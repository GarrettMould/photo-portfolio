import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media only screen and (max-width: 599px) {
    justify-content: center;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;

  @media only screen and (max-width: 599px) {
    padding: 0 30px;
  }
`;

export const Padding = styled.div`
  padding-top: 5%;
`;

export const BasicContainer = styled.div`
  max-width: 100%;
`;
