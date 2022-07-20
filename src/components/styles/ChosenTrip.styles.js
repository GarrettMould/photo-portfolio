import styled from "styled-components";

export const ChosenTripTitle = styled.div.attrs((props) => ({
  fontSize: props.fontSize,
  lineHeight: props.lineHeight,
}))`
  text-align: end;
  font-size: ${(props) => props.fontSize}%;
  font-weight: 600;
  line-height: ${(props) => props.lineHeight}%;

  @media only screen and (max-width: 599px) {
    text-align: start;
  }
`;
export const ChosenTripDates = styled.div`
  text-align: end;
  font-size: 120%;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.5);

  @media only screen and (max-width: 599px) {
    padding-bottom: 2%;
    font-size: 150%;
    text-align: start;
  }
`;

export const ChosenTripSummary = styled.div`
  font-size: 130%;
  line-height: 170%;
  width: 70%;

  @media only screen and (max-width: 599px) {
    font-size: 110%;
    line-height: 170%;
    width: 90%;
    padding-bottom: 5%;
  }
`;

export const TripDetailsContainer = styled.div.attrs((props) => ({
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
}))`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  @media only screen and (max-width: 599px) {
    max-width: 100%;
    height: auto;
  }
`;

export const CameraDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CameraInformation = styled.div`
  font-size: 120%;
  color: rgba(34, 34, 34, 0.5);

  span {
    color: #121212;
  }
`;

export const FilmInformation = styled.div`
  font-size: 120%;
`;
