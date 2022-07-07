import styled from "styled-components";

export const StyledTripsTimeline = styled.ul`
  width: 90%;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  list-style: none;

  li::after {
    content: "";
    display: block;
    margin-top: 2%;
    width: 100%;
    height: 2px;
    background: rgba(34, 34, 34, 0.2);
    /* Firefox */
    -moz-transition: all 0.3s ease-in;
    /* WebKit */
    -webkit-transition: all 0.3s ease-in;
    /* Opera */
    -o-transition: all 0.3s ease-in;
    /* Standard */
    transition: all 0.3s ease-in;
  }

  li:hover {
    color: #121212;
    cursor: pointer;
  }

  li:hover::after {
    content: "";
    display: block;
    margin-top: 2%;
    width: 100%;
    height: 2px;
    background: #121212;
  }
`;

export const TripsHeadline = styled.div`
  font-size: 300%;
  padding: 10% 0% 5% 0%;

  @media only screen and (max-width: 599px) {
    font-size: 250%;
    text-align: center;
    padding-top: 15%;
  }
`;

export const TripContainer = styled.li`
  width: 100%;
  padding-top: 5%;

  @media only screen and (max-width: 599px) {
    padding-top: 5%;
  }
`;

export const TripLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  @media only screen and (max-width: 599px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
  }
`;

export const TripTitle = styled.div`
  font-size: 150%;

  @media only screen and (max-width: 599px) {
    font-size: 120%;
  }
`;

export const TripDates = styled.div`
  font-size: 120%;
  color: rgba(34, 34, 34, 0.5);

  @media only screen and (max-width: 599px) {
    font-size: 90%;
  }
`;
