import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 5% 0% 3% 0%;
`;

export const FooterItem = styled.div`
  padding-left: 5%;
  font-size: 140%;
  font-weight: 600;

  a,
  a:hover {
    text-decoration: none;
    color: #121212;
  }
`;

export const FooterFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
