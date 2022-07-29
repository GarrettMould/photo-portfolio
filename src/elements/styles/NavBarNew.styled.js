import styled from "styled-components";

export const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  

  a {
    text-decoration: none;
  }

  li {
    font-size: 90%;
    list-style: none;

    
  }

  li::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: #121212;
    transition: width 0.3s;
  }

  li:hover::after {
    width: 100%;
  }
  @media only screen and (max-width: 599px) {
    li:active::after {
      width: 100%;
    }
  }
`;