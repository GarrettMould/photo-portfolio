import styled from "styled-components";

export const TripTitle = styled.div.attrs((props) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  textAlign: props.textAlign,
  paddingBottom: props.paddingBottom,
}))`
  font-family: "WalsheimRegular";
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  padding-bottom: ${(props) => props.paddingBottom};
  

  span { 
    color: grey;
  }
`;

export const Image = styled.img`
  max-width: 95%;
`;
