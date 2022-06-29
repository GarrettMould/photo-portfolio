import { StyledHomePhoto } from "./styles/PhotoElements.styled";

import { StyledContainer } from "../components/styles/Container.styles";

import HomeImage from "../images/homeImage.jpg";

const HomePhoto = (props) => {
  return <StyledHomePhoto src={HomeImage}></StyledHomePhoto>;
};

export default HomePhoto;
