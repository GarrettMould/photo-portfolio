import { StyledBigPhoto } from "./styles/BigPhoto.styled";

import { StyledContainer } from "../components/styles/Container.styles";

import TestImage from "../images/NhaTrang/R1-03344-0002.JPG";

const BigPhoto = (props) => {
  return (
    <StyledContainer>
      <StyledBigPhoto src={TestImage}></StyledBigPhoto>
    </StyledContainer>
  );
};

export default BigPhoto;
