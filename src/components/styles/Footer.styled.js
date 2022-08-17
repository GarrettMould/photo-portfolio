import styled from "styled-components";

export const FooterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 80px 10px 0px 10px;

   @media only screen and (max-width: 599px) {
      padding: 20px 10px 10px 20px;
  }
`

export const ContactLinksContainer = styled.div`
   display: flex; 
   flex-direction: column;
   width: 30%;
`

export const ContactTitle = styled.div`
   font-size: 140%; 
   font-weight: 500;
`
export const FooterItem = styled.div`
font-size: 110%; 
padding-bottom: 3%;

a {
   
    text-decoration: none;
    color: black;
  }

  a:hover { 
    text-decoration: underline;
    color: grey;
  }

  @media only screen and (max-width: 599px) {
   padding-bottom: 8%;
    font-size: 90%;
  }

`
export const CopyrightContainer = styled.div`
   width: 70%; 
   display: flex; 
   align-items: center;
   justify-content: flex-end;
   padding-right: 10px;

`

export const Copyright = styled.div`
font-size: 750%; 
font-weight: 700; 

span { 
   display: inline-block;
   animation: mirrorflip 3s 0s linear infinite;
  
}

@keyframes mirrorflip {
	0% {
		transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		-moz-transform: scale(1, 1);
		-o-transform: scale(1, 1);
		-ms-transform: scale(1, 1);
		
	}
	50% {
		transform: scale(-1, 1);
		-webkit-transform: scale(-1, 1);
		-moz-transform: scale(-1, 1);
		-o-transform: scale(-1, 1);
		-ms-transform: scale(-1, 1);
	}
	100% {
		transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		-moz-transform: scale(1, 1);
		-o-transform: scale(1, 1);
		-ms-transform: scale(1, 1);
	}
}

@media only screen and (max-width: 599px) {
    font-size: 350%;
  }

`
