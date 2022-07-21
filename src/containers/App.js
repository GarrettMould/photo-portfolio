import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";

import {
  PhotoContainer,
  GridPhoto,
} from "../elements/styles/SelectedTripDetails.styled";

import { StyledContainer } from "../components/styles/Container.styles";
import { photos } from "../Photos";
import HomePage from "../components/HomePage";
import TripsPage from "../components/TripsPage";
import Header from "../elements/Header";
import Footer from "../components/Footer";
import GridSection from "../components/GridSection";
import ChosenTripNhaTrang from "../components/ChosenTripNhaTrang";
import ChosenTripPuLuong from "../components/ChosenTripPuLuong";
import ChosenTripDaNang from "../components/ChosenTripDaNang";
import ChosenTripHanoi from "../components/ChosenTripHanoi";
import BackButton from "../elements/BackButton";
import GridSpacerMobile from "../components/GridSpacerMobile";

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

  const scrollRef = useRef();

  // Set state based on selected trip information

  console.log(currentIndex);

  const scrollToTop = setTimeout(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("scrolled?");
  }, 1000);

  const handleClick = (e) => {
    var id = e.target.id;
    setCurrentIndex(id);
    setDestination(photos[id].destination);
    setDates(photos[id].dates);
    setSummary(photos[id].summary);
    setCameraTitle(photos[id].cameraTitle);
    setFilmTitle(photos[id].filmTitle);
    setCamera(photos[id].camera);
    setFilm(photos[id].film);
    setPhotoGallery(photos[id].photos);

    scrollToTop();
  };

  // Clear State of selected trip information
  const clearState = () => {
    setCurrentIndex(null);
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

  var display;

  if (currentIndex == null) {
    display = (
      <>
        {" "}
        <HomePage></HomePage>
        <GridSpacerMobile></GridSpacerMobile>
        <TripsPage handleClick={handleClick}></TripsPage>
        <GridSection></GridSection>
        <Footer padding="10% 0% 7% 0%"></Footer>
      </>
    );
  } else if (currentIndex == 0) {
    display = (
      <>
        {" "}
        <BackButton clearState={clearState}></BackButton>
        <ChosenTripNhaTrang></ChosenTripNhaTrang>
        <Footer padding="20% 0% 7% 0%"></Footer>
      </>
    );
  } else if (currentIndex == 1) {
    display = (
      <>
        {" "}
        <BackButton clearState={clearState}></BackButton>
        <ChosenTripPuLuong></ChosenTripPuLuong>
        <Footer padding="17% 0% 7% 0%"></Footer>
      </>
    );
  } else if (currentIndex == 2) {
    display = (
      <>
        {" "}
        <BackButton clearState={clearState}></BackButton>
        <ChosenTripDaNang></ChosenTripDaNang>
        <Footer padding="15% 0% 7% 0%"></Footer>
      </>
    );
  } else if (currentIndex == 3) {
    display = (
      <>
        {" "}
        <BackButton clearState={clearState}></BackButton>
        <ChosenTripHanoi></ChosenTripHanoi>
        <Footer padding="17% 0% 7% 0%"></Footer>
      </>
    );
  } else {
    display = (
      <>
        {" "}
        <HomePage></HomePage>
        <TripsPage handleClick={handleClick}></TripsPage>
        <GridSection></GridSection>
        <Footer padding="10% 0% 7% 0%"></Footer>
      </>
    );
  }

  return (
    <>
      <div ref={scrollRef}></div>
      <StyledContainer>{display}</StyledContainer>
    </>
  );
};

export default App;
