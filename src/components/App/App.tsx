import { Wrapper, Container } from './AppStyles';
import colorList from '../../config/colorList';
import Header from '../Header/Header';
import MainBox from '../MainBox/MainBox';
import TopSection from '../TopSection/TopSection';
import BottomSection from '../BottomSection/BottomSection';
import InfoIcon from '../InfoIcon/InfoIcon';
import NavigationButton from '../NavigationButton/NavigationButton';
import StorageContent from '../StorageContent/StorageContent';
import StorageHeading from '../StorageHeading/StorageHeading';
import Board from '../Board/Board';
import UserPanel from '../UserPanel/UserPanel';

import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { UserInterface } from '../../redux/reducers/userReducer';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import { db } from '../../config/firebaseConfig';


const App = () => {
  const userData: UserInterface = useSelector((state: StateInterface): UserInterface => state.userData);
    

  return(
    <Router>
      <Wrapper> 

        <Header>
          <InfoIcon color={ colorList.darkBrown } pos="top" />
        </Header>

        <Container>

          <UserPanel/>

          <Switch>

            <Route path="/" exact>
              <MainBox type="Center">
                <TopSection color={ colorList.white } padding="15px 15px" isBoard={ true }>
                  <h2>Home</h2>
                </TopSection>
                <BottomSection color={ colorList.mainOrange } padding="15px 15px">
                  <Link to="/shop"><NavigationButton>Shop</NavigationButton></Link>
                  <Link to="/farm"><NavigationButton>Farm</NavigationButton></Link>
                  <Link to="/market"><NavigationButton>Market</NavigationButton></Link>
                  <InfoIcon color={ colorList.white } pos="bottom" />
                </BottomSection>
              </MainBox>
            </Route>

            <Route path="/farm">
              <MainBox type="Center">
                <TopSection color={ colorList.white } padding="15px 15px" isBoard={ true }>
                  <Board />
                </TopSection>
                <BottomSection color={ colorList.mainOrange } padding="15px 15px">
                  <Link to="/shop"><NavigationButton>Shop</NavigationButton></Link>
                  <Link to="/farm"><NavigationButton active>Farm</NavigationButton></Link>
                  <Link to="/market"><NavigationButton>Market</NavigationButton></Link>
                  <InfoIcon color={ colorList.white } pos="bottom" />
                </BottomSection>
              </MainBox>
            </Route>

            <Route path="/shop">
              <MainBox type="Center">
                <TopSection color={ colorList.white } padding="15px 15px" isBoard={ true }>
                  <h2>Shop</h2>
                </TopSection>
                <BottomSection color={ colorList.mainOrange } padding="15px 15px">
                  <Link to="/shop"><NavigationButton active>Shop</NavigationButton></Link>
                  <Link to="/farm"><NavigationButton>Farm</NavigationButton></Link>
                  <Link to="/market"><NavigationButton>Market</NavigationButton></Link>
                  <InfoIcon color={ colorList.white } pos="bottom" />
                </BottomSection>
              </MainBox>
            </Route>

            <Route path="/market">
              <MainBox type="Center">
                <TopSection color={ colorList.white } padding="15px 15px" isBoard={ true }>
                  <h2>Market</h2>
                </TopSection>
                <BottomSection color={ colorList.mainOrange } padding="15px 15px">
                  <Link to="/shop"><NavigationButton>Shop</NavigationButton></Link>
                  <Link to="/farm"><NavigationButton>Farm</NavigationButton></Link>
                  <Link to="/market"><NavigationButton active>Market</NavigationButton></Link>
                  <InfoIcon color={ colorList.white } pos="bottom" />
                </BottomSection>
              </MainBox>
            </Route>

          </Switch>
                  
          <MainBox type="Right">
            <TopSection color={ colorList.mainOrange } padding="20px 20px">
              <StorageHeading />
              <InfoIcon color={ colorList.white } pos="top" />
            </TopSection>

            <BottomSection color={ colorList.white } padding="15px 0 0 15px" >
              <StorageContent />
            </BottomSection>
          </MainBox>

        </Container>
        
      </Wrapper>
    </Router>
  )
}

export default App;