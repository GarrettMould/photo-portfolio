import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import {
  PhotoContainer,
  GridPhoto,
} from "../elements/styles/SelectedTripDetails.styled";
import SelectedTrip from "../components/SelectedTrip";

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

  const [currentIndex, setCurrentIndex] = useState(null);

  // Set state based on selected trip information
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

  // Clear State of selected trip information
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

  // Render image content

  const renderImageContent = (photo, index) => {
    return (
      <>
        <PhotoContainer onClick={(e) => openModal(e, index)}>
          <GridPhoto src={photo.src} key={photo.src}></GridPhoto>
        </PhotoContainer>
      </>
    );
  };

  const openModal = (e, index) => {
    setCurrentIndex(index);
    console.log(index);
  };

  const closeModal = (e) => {
    if (e != undefined) {
      e.preventDefault();
    }
    setCurrentIndex(null);
  };

  const findPrev = (e) => {
    if (e != undefined) {
      e.preventDefault();
    }

    setCurrentIndex(currentIndex - 1);
  };

  const findNext = (e) => {
    if (e != undefined) {
      e.preventDefault();
    }

    setCurrentIndex(currentIndex + 1);

    console.log(currentIndex);
  };

  return (
    <>
      <Header clearState={clearState}></Header>
      {!photoGallery ? (
        <Home handleClick={handleClick}></Home>
      ) : (
        <SelectedTrip
          currentIndex={currentIndex}
          renderImageContent={renderImageContent}
          closeModal={closeModal}
          findPrev={findPrev}
          findNext={findNext}
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
