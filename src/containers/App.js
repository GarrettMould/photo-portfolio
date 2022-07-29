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

  

  

  return (
    <StyledContainer>
      <HeaderNew></HeaderNew>
      <Routes>
        <Route path="/" element={<HomePage tripIndex={tripIndex}></HomePage>}/>
        <Route path="/SelectedTrip" element={<SelectedTrip tripIndex={tripIndex}></SelectedTrip>}/>
      </Routes>
      
      {/*<HomePage></HomePage>*/}
        
      
      
    </StyledContainer>
  )
}

export default App;
