import { useState } from "react";

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
    <StyledContainer>
      <HeaderNew closeModal={closeModal}></HeaderNew>
      <Routes>
        <Route path="/" element={<HomePage tripIndex={tripIndex} handleTripSelect={handleTripSelect}></HomePage>}/>
        <Route path="/SelectedTrip" element={<SelectedTrip tripIndex={tripIndex} modalOpen={modalOpen} handleImageSelect={handleImageSelect} modalSource={modalSource}></SelectedTrip>}/>
      </Routes>
      
      {/*<HomePage></HomePage>*/}
        
      
      
    </StyledContainer>
  )
}

export default App;
