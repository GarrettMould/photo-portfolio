import styled from "styled-components";

export const StyledSectionHeader = styled.div`
  padding-top: 10%;
  padding-bottom: 5%;
  font-size: 250%;
  font-weight: 500;
  text-align: center;

  span {
    padding-left: 10px;
    padding-right: 10px;
  }

  h2::after {
    content: "";
    display: inline-block;
    height: 0.5em;
    vertical-align: bottom;
    width: 100%;
    margin-right: -100%;
    margin-left: 10px;
    border-top: 1px solid black;
  }
`;
