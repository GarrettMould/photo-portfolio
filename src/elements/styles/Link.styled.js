import styled from "styled-components";

export const StyledLink = styled.div`
  padding-top: 3%;
  font-size: 150%;
  color: white;
  display: inline-block;

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
    transition-duration: 0.3s;
  }

  li:hover {
    color: #fff01f;
    transition-duration: 0.3s;
  }

  li::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #fff01f;
    transition: width 0.3s;
  }

  li:hover::after {
    width: 0%;
  }
`;
