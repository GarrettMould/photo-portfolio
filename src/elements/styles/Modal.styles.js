import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 999;
  width: 50%;
  max-width: 800px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  img {
    width: 100%;
    border: 5px solid #fff;
  }
`;

export const ModalClose = styled.a`
  position: absolute;
  display: inline;
  color: black;
  text-decoration: none;
  line-height: 36px;
  font-size: 30px;
  font-weight: lighter;
  background: #fff;
  border-radius: 5px;
  height: 40px;
  width: 40px;
  text-align: center;
  right: 0;
  top: 0;
  border-radius: 0 0 0 5px;
`;

export const ModalBody = styled.div`
  position: relative;

  &&& {
    padding: 0;
  }
`;

export const ModalPrev = styled.a`
  position: absolute;
  display: inline;
  color: black;
  text-decoration: none;
  line-height: 36px;
  font-size: 30px;
  font-weight: lighter;
  background: #fff;
  border-radius: 5px;
  height: 40px;
  width: 40px;
  text-align: center;
  right: 0;
  top: calc(50% - 25px);
  border-radius: 5px 0 0 5px;
  height: 50px;
  line-height: 40px;
  font-size: 60px;

  left: 0;
  right: auto;
  border-radius: 0 5px 5px 0;
`;

export const ModalNext = styled.a`
  position: absolute;
  display: inline;
  color: $black;
  text-decoration: none;
  line-height: 36px;
  font-size: 30px;
  font-weight: lighter;
  background: #fff;
  border-radius: 5px;
  height: 40px;
  width: 40px;
  text-align: center;
  right: 0;
  top: calc(50% - 25px);
  border-radius: 5px 0 0 5px;
  height: 50px;
  line-height: 40px;
  font-size: 60px;
`;
