import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledContainer = styled.div`
  max-width: 100%;
  padding: 0 100px;
  margin: 0 auto;
`;

export const Padding = styled.div`
  padding-top: 5%;
`;

export const BasicContainer = styled.div`
  max-width: 100%;
`;

export const GridContainer = styled.div`
  padding: 5% 0%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
