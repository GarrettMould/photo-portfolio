import { useEffect } from "react";

import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalClose,
  ModalPrev,
  ModalNext,
} from "./styles/Modal.styles";
const GalleryModal = (props) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) props.closeModal();
    if (e.keyCode === 37 && props.hasPrev) props.findPrev();
    if (e.keyCode === 39 && props.hasNext) props.findNext();
  };

  if (!props.src) {
    console.log("whut");
    return null;
  }

  console.log(props.src);
  return (
    <div>
      <ModalOverlay onClick={props.closeModal}></ModalOverlay>

      <Modal isOpen={!!props.src}>
        <ModalBody>
          <ModalClose
            href="#"
            onClick={props.closeModal}
            onKeyDown={handleKeyDown}
          >
            &times;
          </ModalClose>
          {props.hasPrev && (
            <ModalPrev
              href="#"
              onClick={props.findPrev}
              onKeyDown={handleKeyDown}
            >
              &lsaquo;
            </ModalPrev>
          )}
          {props.hasNext && (
            <ModalNext
              href="#"
              onClick={props.findNext}
              onKeyDown={handleKeyDown}
            >
              &rsaquo;
            </ModalNext>
          )}
          <img src={props.src}></img>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GalleryModal;
