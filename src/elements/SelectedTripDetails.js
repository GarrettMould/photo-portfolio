import { StyledContainer } from "../components/styles/Container.styles";

import { FlexRowBetween } from "../components/styles/Flex.styles";

import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";

import { Tooltip } from "react-bootstrap";

import BigPhoto from "./BigPhoto";

import {
  SelectedTripDetailsContainer,
  SelectedTripDates,
  SelectedTripTitle,
  Photo,
} from "./styles/SelectedTripDetails.styled";

const SelectedTripDetails = (props) => {
  return (
    <>
      <BigPhoto></BigPhoto>
      <StyledContainer>
        <FlexRowBetween>
          <SelectedTripDetailsContainer>
            <SelectedTripTitle>{props.destination}</SelectedTripTitle>
            <SelectedTripDates>{props.dates}</SelectedTripDates>
          </SelectedTripDetailsContainer>
          <FlexRowBetween>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip
                  id="button-tooltip"
                  style={{
                    padding: "20px 10px",
                    fontSize: "15px",
                    color: "white",
                    borderRadius: 3,
                  }}
                >
                  {props.cameraTitle}
                </Tooltip>
              }
            >
              <Photo src={props.camera}></Photo>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip
                  id="button-tooltip"
                  style={{
                    padding: "20px 10px",
                    fontSize: "15px",
                    color: "white",
                    borderRadius: 3,
                  }}
                >
                  {props.filmTitle}
                </Tooltip>
              }
            >
              <Photo src={props.film}></Photo>
            </OverlayTrigger>
          </FlexRowBetween>
        </FlexRowBetween>
      </StyledContainer>
    </>
  );
};

export default SelectedTripDetails;
