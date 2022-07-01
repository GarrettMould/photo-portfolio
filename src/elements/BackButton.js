import { StyledBackButton } from "./styles/BackButton.styles";

const BackButton = (props) => {
  return (
    <button onClick={props.clearState}>
      <StyledBackButton>&#8592; GO BACK</StyledBackButton>
    </button>
  );
};

export default BackButton;
