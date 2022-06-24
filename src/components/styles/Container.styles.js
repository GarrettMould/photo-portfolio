import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 100%;
  padding: 0 100px;
  margin: 0 auto;
  font-size: 200%;
  color: white;
`;

export const BasicContainer = styled.div`
  max-width: 100%;  
`

export const GridContainer = styled.div`
padding: 5% 0%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 8px;
max-width: 1200px;
width: 100%;
margin: 0 auto;

`
