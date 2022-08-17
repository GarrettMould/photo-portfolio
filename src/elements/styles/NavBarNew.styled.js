import styled from "styled-components";

export const StyledNavBar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  
  a {
    padding-bottom: 3%;
    text-decoration: none;
  }

  li {
    font-size: 110%;
    list-style: none;
  }


  li:hover { 
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