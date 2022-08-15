import styled from "styled-components";

export const TripTitle = styled.div.attrs((props) => ({
  lineHeight: props.lineHeight,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  textAlign: props.textAlign,
  paddingBottom: props.paddingBottom,
}))`
  line-height: ${(props) => props.lineHeight};
  font-family: "WalsheimThin";
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  padding-bottom: ${(props) => props.paddingBottom};
  
`;

export const CameraDetails = styled.div.attrs((props) => ({
  lineHeight: props.lineHeight,
  fontSize: props.fontSize,
}))`
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
