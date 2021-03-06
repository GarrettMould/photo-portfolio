import styled from "styled-components";


export const SiteTitle = styled.div`
padding-top: 20px;
padding-left: 20px;
font-size: 200%; 

@media only screen and (max-width: 599px) {
    padding-top: 10px;
    padding-left: 10px;
    font-size: 120%;
  }

`

export const SiteSubTitle = styled.div`
padding-left: 20px;
font-size: 120%; 
color: grey; 

@media only screen and (max-width: 599px) {
    padding-left: 10px;
    font-size: 80%; 
    color: grey; 
  }
`