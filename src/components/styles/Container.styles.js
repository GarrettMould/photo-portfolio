import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media only screen and (max-width: 599px) {
    justify-content: center;
  }
`;

export const StyledContainer = styled.div`
display: flex; 
flex-direction: column;
height: 100%;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media only screen and (max-width: 599px) {
    padding: 0px;
  }
`;

export const Padding = styled.div.attrs((props) => ({
  top: props.top,
}))`
  padding-top: ${(props) => props.top}
`

export const BasicContainer = styled.div`
  max-width: 100%;
`;
