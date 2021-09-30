// IMPORTS


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

import { Wrapper, Container } from './AppStyles';
import { AppPropsInterface } from '../interfaces';
import colorList from '../../config/colorList';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


// COMPONENT


const App: React.FC<AppPropsInterface> = (): JSX.Element => {
    

  // JSX


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