import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import MainBody from "../components/MainBody";
import SelectedTrip from "../components/SelectedTrip";
import StyledTimeline from "../components/Timeline";
import SectionHeader from "../elements/SectionHeader";

import { photos } from "../Photos";

const App = (props) => {

  const [destination, setDestination] = useState(""); 
  const [dates, setDates] = useState(""); 
  const [summary, setSummary] = useState(""); 
  const [cameraTitle, setCameraTitle] = useState(""); 
  const [filmTitle, setFilmTitle] = useState(""); 
  const [camera, setCamera] = useState("");
  const [film, setFilm] = useState("");
  const [photos, setPhotos] = useState("");
  
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
