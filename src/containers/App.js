import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import {
  PhotoContainer,
  GridPhoto,
} from "../elements/styles/SelectedTripDetails.styled";

import { StyledContainer } from "../components/styles/Container.styles";
import { photos } from "../Photos";
import HomePage from "../components/HomePage";
import TripsPage from "../components/TripsPage";
import Footer from "../components/Footer";
import GridSection from "../components/GridSection";
import ChosenTripNhaTrang from "../components/ChosenTripNhaTrang";
import ChosenTripPuLuong from "../components/ChosenTripPuLuong";
import ChosenTripDaNang from "../components/ChosenTripDaNang";
import ChosenTripHanoi from "../components/ChosenTripHanoi";

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

  console.log(destination, dates);

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
      <StyledContainer>
        <HomePage></HomePage>
        <TripsPage handleClick={handleClick}></TripsPage>
        <GridSection></GridSection>
        <ChosenTripHanoi></ChosenTripHanoi>
        <ChosenTripNhaTrang></ChosenTripNhaTrang>
        <Footer></Footer>
      </StyledContainer>
    </>
  );
};

export default App;
