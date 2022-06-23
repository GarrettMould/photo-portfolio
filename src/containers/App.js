import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header";
import MainBody from "../components/MainBody";
import TripsBody from "../components/TripsBody";
import StyledTimeline from "../components/Timeline";

function App() {
  return (
    <>
      <Header></Header>
      <MainBody></MainBody>
      <StyledTimeline></StyledTimeline>
    </>
  );
}

export default App;
