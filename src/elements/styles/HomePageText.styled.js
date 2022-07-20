import styled from "styled-components";

export const Container = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
`;

export const HomePageMessage = styled.div`
  padding-top: 10%;
  font-size: 350%;
  font-weight: 400;
  text-align: end;

  @media only screen and (max-width: 599px) {
    font-size: 320%;
    text-align: center;
  }
`;

export const HomePageName = styled.div`
  padding-bottom: 5%;
  font-size: 520%;
  font-weight: 600;
  text-align: end;
  margin-top: auto;

  @media only screen and (max-width: 599px) {
    padding-top: 3%;
    font-size: 450%;
    line-height: 130%;
    text-align: center;
  }
`;
