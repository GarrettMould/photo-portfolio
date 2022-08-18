import styled from "styled-components";

export const TripTitle = styled.div.attrs((props) => ({
  lineHeight: props.lineHeight,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  textAlign: props.textAlign,
  paddingBottom: props.paddingBottom,
}))`
  width: 90%;
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  padding-bottom: ${(props) => props.paddingBottom};

  span { 
    color: grey;
    font-family: "WalsheimLight";
  }
  
`;

export const CameraDetails = styled.div.attrs((props) => ({
  lineHeight: props.lineHeight,
  fontSize: props.fontSize,
}))`
  width: 75%;
  line-height: ${(props) => props.lineHeight};
  font-family: "WalsheimThin";
  color: grey;
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  padding-bottom: 0%;
  `

export const Image = styled.img`
  max-width: 100%;
`;

export const FilmDetails = styled.div`
    width: 75%;
    line-height: ${(props) => props.lineHeight};
    font-family: "WalsheimThin";
    color: #D3D3D3;
    font-size: ${(props) => props.fontSize};
    font-weight: 400;
    padding-bottom: 0%;
`
