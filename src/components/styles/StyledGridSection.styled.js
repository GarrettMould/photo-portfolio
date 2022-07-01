import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  margin: 5% 0% 0% 0%;
  gap: 1em;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1%;
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
    font-size: 250%;
  }
`;
