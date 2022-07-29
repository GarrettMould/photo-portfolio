import { StyledContainer } from '../components/styles/Container.styles';

import HeaderNew from '../components/HeaderNew';

import HomePage from '../components/HomePage';

import Footer from '../components/Footer';

import SelectedTrip from '../components/SelectedTrip';



import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => { 
  return (
    <StyledContainer>
      <HeaderNew></HeaderNew>
      <SelectedTrip></SelectedTrip>
      {/*<HomePage></HomePage>*/}
        
      
      
    </StyledContainer>
  )
}

export default App;
