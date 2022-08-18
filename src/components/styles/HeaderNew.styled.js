import styled from "styled-components";


export const SiteTitle = styled.div`

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
} 

padding-top: 5px;
padding-left: 5px;
font-size: 200%; 
font-family: "WalsheimRegular";
animation: fadeInAnimation 0.25s ease-in;

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

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}  

padding-left: 5px;
font-size: 120%; 
color: grey; 
animation: fadeInAnimation 0.25s ease-in;

@media only screen and (max-width: 599px) {
    padding-left: 10px;
    font-size: 100%; 
    color: grey; 
  }
`