import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header";
import MainBody from "../components/MainBody";
import SelectedTrip from "../components/SelectedTrip";
import StyledTimeline from "../components/Timeline";
import SectionHeader from "../elements/SectionHeader";

function App() {
  return (
    <>
      <Header></Header>
      <MainBody></MainBody>
      <SectionHeader></SectionHeader>
      <StyledTimeline></StyledTimeline>
      <SelectedTrip></SelectedTrip>
    </>
  );
}

export default App;
