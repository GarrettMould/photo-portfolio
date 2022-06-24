import styled from "styled-components";

export const SelectedTripDetailsContainer = styled.div`
width: 70%;
`
export const SelectedTripTitle = styled.div`
  font-size: 180%;
  font-weight: 600;
`;
export const SelectedTripDates = styled.div`
  font-size: 120%;
  font-weight: 400;
  color: #fff01f;
`;

export const Photo = styled.img`
  max-width: 110px;
  margin-left: 30px;
`;

export const StyledSelectedTripSummary = styled.div`
    padding-top: 4%;
    width: 70%; 
    font-size: 80%; 
`

export const PhotoContainer = styled.div`
  position: relative;
  cursor: pointer;
  
 
  &:before, &:after {
    transition: .3s opacity ease;
    opacity: 0;
  }

  &:after {
    display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;     
      font-family: 'Font Awesome 5 Free';
      content: '\f424';
      font-weight: 900;
      font-size: 80px;
      position: absolute;
      transform: translate3d(-50%, -50%, 0) rotate(-45deg);
      color: pink;
      left: 50%;
      top: 50%;
      display: block;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(34, 34, 34, 0.7);
    display: block;
  }
  &:hover {
    &:before, &:after {
      opacity: 1;
      transition: .3s opacity ease;
    }
  }
`

export const GridPhoto = styled.img`
  width: 100%;
  border: 5px solid #fff;
  
  
`