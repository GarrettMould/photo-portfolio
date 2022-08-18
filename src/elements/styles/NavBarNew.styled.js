import styled from "styled-components";

export const StyledNavBar = styled.div`

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
} 

@keyframes shiftUpAnimation {
    0% {
        transform: translateY(-3%);
    }
    100% {
        transform: translateY(0%);
     }
} 

  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;

  

 
  li {
    position: absolute;
    font-size: 110%;
    list-style: none;
    padding-bottom: 3%;
    text-decoration: none;
    animation-delay: 250ms;
    

  :nth-child(1) { 
    
    animation: fadeInAnimation .25s ease-in;

  }

  :nth-child(2) { 
    top: 3%;
    animation: fadeInAnimation .5s ease-in;
  
  }

  :nth-child(3) { 
    top: 6%;
    animation: fadeInAnimation .75s ease-in;
  
  }

  }


  li:hover { 
    cursor: pointer;
    text-decoration: underline;
    color: grey;
  }

  @media only screen and (max-width: 599px) {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;


    li {
    font-size: 90%;

    
  }

  li::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: #121212;
    transition: width 0.3s;
  }

  a { 
    padding-bottom: 2%;
  }

    li:active::after {
      width: 100%;
    }
  }
`;
