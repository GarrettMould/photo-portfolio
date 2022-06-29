import styled from "styled-components";

export const StyledTripsTimeline = styled.ul`
  width: 55%;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  list-style: none;

  li::after {
    content: "";
    display: block;
    margin-top: 2%;
    width: 100%;
    height: 1px;
    background: rgba(34, 34, 34, 0.2);
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
    height: 1px;
    background: #121212;
  }
`;

export const TripsHeadline = styled.div`
  font-size: 300%;
  padding: 5% 0%;
`;

export const TripContainer = styled.li`
  width: 100%;
  padding-top: 3%;
`;

export const TripLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

export const TripTitle = styled.div`
  font-size: 150%;
`;

export const TripDates = styled.div`
  font-size: 120%;
  color: rgba(34, 34, 34, 0.2);
`;
