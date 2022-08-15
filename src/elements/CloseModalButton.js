import { X } from "phosphor-react";

import { CloseModalContainer } from "./styles/CloseModalButton.styled";

const CloseModalButton = (props) => { 
    return <div>
        <CloseModalContainer onClick={props.closeModal}>
            <X size={props.isMobile ? 40 : 60} />
        </CloseModalContainer>
    </div> 
}

export default CloseModalButton; 