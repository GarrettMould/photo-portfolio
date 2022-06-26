import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import SelectedTrip from "../components/SelectedTrip";
import StyledTimeline from "../components/Timeline";
import SectionHeader from "../elements/SectionHeader";
import { Routes } from "react-router-dom";

import { photos } from "../Photos";

const App = (props) => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [summary, setSummary] = useState("");
  const [cameraTitle, setCameraTitle] = useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const [camera, setCamera] = useState("");
  const [film, setFilm] = useState("");
  const [photoGallery, setPhotoGallery] = useState("");

  const handleClick = (e) => {
    var id = e.target.id;
    setDestination(photos[id].destination);
    setDates(photos[id].dates);
    setSummary(photos[id].summary);
    setCameraTitle(photos[id].cameraTitle);
    setFilmTitle(photos[id].filmTitle);
    setCamera(photos[id].camera);
    setFilm(photos[id].film);
    setPhotoGallery(photos[id].photos);
  };

  const clearState = () => {
    setDestination("");
    setDates("");
    setSummary("");
    setCameraTitle("");
    setFilmTitle("");
    setCamera("");
    setFilm("");
    setPhotoGallery("");
  };
  return (
    <>
      <Header clearState={clearState}></Header>
      {!photoGallery ? (
        <Home handleClick={handleClick}></Home>
      ) : (
        <SelectedTrip
          destination={destination}
          dates={dates}
          summary={summary}
          cameraTitle={cameraTitle}
          filmTitle={filmTitle}
          camera={camera}
          film={film}
          photoGallery={photoGallery}
        ></SelectedTrip>
      )}
    </>
  );
};

export default App;
