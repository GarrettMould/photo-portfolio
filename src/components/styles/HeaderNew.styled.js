import styled from "styled-components";


export const SiteTitle = styled.div`
padding-top: 5px;
padding-left: 5px;
font-size: 200%; 
font-family: "WalsheimRegular";

:hover { 
  color: grey;
}

@media only screen and (max-width: 599px) {
    padding-top: 10px;
    padding-left: 10px;
    font-size: 140%;
  }

`

export const SiteSubTitle = styled.div`
padding-left: 5px;
font-size: 120%; 
color: grey; 

@media only screen and (max-width: 599px) {
    padding-left: 10px;
    font-size: 100%; 
    color: grey; 
  }
`