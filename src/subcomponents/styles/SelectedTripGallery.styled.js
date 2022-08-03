import styled from "styled-components";

export const PageContainer = styled.div`
  position:relative; 
`
export const NewGridContainer = styled.div.attrs((props) => ({
  opacity: props.opacity,
  gridAutoRows: props.gridAutoRows,
}))`
  
  opacity: ${(props) => props.opacity};
  display: grid; 
  padding-top: 50px;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: ${(props) => props.gridAutoRows};
`

export const GridItem= styled.div.attrs((props) => ({ 
  gridColumnStart: props.gridColumnStart, 
  gridColumnEnd: props.gridColumnEnd, 
  gridRowStart: props.gridRowStart, 
  gridRowEnd: props.gridRowEnd,
}))`
grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: span ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: span ${(props) => props.gridRowEnd};


`

export const TripDetailsCell = styled.div`
padding-left: 10px;
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: span 1;
  
`
export const Image = styled.img.attrs((props) => ({
    maxWidth: props.maxWidth,
}))`
    max-width: ${(props) => props.maxWidth};
`

export const Modal = styled.div`
position: fixed;
z-index: 999;  
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100vw;
    height: auto;
    color: black; 
    background-color: black;
`