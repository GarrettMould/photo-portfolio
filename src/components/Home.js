import MainBody from "./MainBody";
import SectionHeader from "../elements/SectionHeader";
import StyledTimeline from "./Timeline";
const Home = (props) => {
  return (
    <div>
      <MainBody></MainBody>
      <SectionHeader></SectionHeader>
      <StyledTimeline handleClick={props.handleClick}></StyledTimeline>
    </div>
  );
};

export default Home;
