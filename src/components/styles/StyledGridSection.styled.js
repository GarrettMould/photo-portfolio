import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  margin: 5% 0% 0% 0%;
  gap: 1em;

  @media only screen and (max-width: 599px) {
    gap: 0.25%;
  }
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1%;

  @media only screen and (max-width: 599px) {
    gap: 3%;
  }

`;

export const GridColumn = styled.div.attrs((props) => ({
  size: props.size,
  justifySelf: props.justifySelf,
}))`
  grid-column: span ${(props) => props.size} / auto;
  justify-self: ${(props) => props.justifySelf};
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const TextBox = styled.div`
  height: 50%;
  margin: 3.25% 0%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 350%;

  p {
    padding: 0% 10%;
    font-size: 200%;
  }

  span {
    text-decoration: underline;
  }
`;

export const NewGridContainer = styled.div`
  display: grid; 
  grid-template-columns: [line1] 40px [line2] 50px [line3] auto [line4] 50px [line5] 40px [end];
  grid-template-rows: [row1] 25% [row2] 100px [row3] auto [end];
`

export const NewGridItem = styled.div.attrs((props) => ({ 
  gridColumn: props.gridColumn, 
  spanColumn: props.spanColumn,
  gridRow: props.gridRow, 
  spanRow: props.spanRow,
}))`
  grid-column: ${(props) => props.gridColumn} / ${(props) => props.spanColumn};
  grid-row: ${(props) => props.gridRow} / ${(props) => props.spanRow};
`
