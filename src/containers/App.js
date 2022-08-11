import { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import { StyledContainer } from '../components/styles/Container.styles';

import HeaderNew from '../components/HeaderNew';

import HomePage from '../components/HomePage';

import Footer from '../components/Footer';

import SelectedTrip from '../components/SelectedTrip';





import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => { 

  const [tripIndex, setTripIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState(null);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  // Event listener that runs when the window is resized and sets the deviceWidth to the current width

  useEffect(() => {
    handleWindowSizeChange();
  });

  const handleWindowSizeChange = () => {
    setDeviceWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWindowSizeChange);

  console.log(deviceWidth);

  // Variable that returns true if device width is less than 500 (use this for mobile styling)

  const isMobile = deviceWidth <= 500;

  console.log(isMobile);

   
  console.log(tripIndex)
  console.log(modalOpen)
  
  const handleTripSelect = (index) => { 
    setTripIndex(index)
  };

  const handleImageSelect = (e) => { 
    console.log(e.currentTarget.src); 
    setModalOpen(true);
    setModalSource(e.currentTarget.src);
  }

  const closeModal = () => { 
    setModalOpen(false);
  }
  

  return (
    <>
      <HeaderNew closeModal={closeModal}></HeaderNew>
      <Routes>
        <Route path="/" element={<HomePage tripIndex={tripIndex} handleTripSelect={handleTripSelect} isMobile={isMobile}></HomePage>}/>
        <Route path="/SelectedTrip" element={<SelectedTrip tripIndex={tripIndex} modalOpen={modalOpen} handleImageSelect={handleImageSelect} modalSource={modalSource} isMobile={isMobile}></SelectedTrip>}/>
      </Routes>
      <Footer></Footer>
      
      
      
      
      </>
      
      
    
  )
}

export default App;
