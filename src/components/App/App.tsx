import { Wrapper, Container } from './AppStyles';
import colorList from '../../config/colorList';
import Header from '../Header/Header';
import MainBox from '../MainBox/MainBox';
import { useState } from 'react';
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
import { User } from '../../redux/reducers/userReducer';

// REACT ROUTER

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import { db } from '../../config/firebaseConfig';


const App = () => {
  const state = useSelector(state => state) as StateInterface;
  const userData: User = state.userData;
  
  const [username, setUsername] = useState(userData.settings.username);
  const [password, setPassword] = useState(userData.settings.password);
  const [email, setEmail] = useState(userData.settings.email);
  const [avatarUrl, setAvatarUrl] = useState(userData.settings.avatarUrl);
  const [userLevel, setUserLevel] = useState(userData.gameplay.userLevel);
  const [userExperience, setUserExperience] = useState(userData.gameplay.userExperience);
  const [userMoney, setUserMoney] = useState(userData.gameplay.userMoney);

  const updateUserProps = () => {
    setUsername(userData.settings.username);
    setPassword(userData.settings.password);
    setEmail(userData.settings.email);
    setAvatarUrl(userData.settings.avatarUrl);
    setUserLevel(userData.gameplay.userLevel);
    setUserExperience(userData.gameplay.userExperience);
    setUserMoney(userData.gameplay.userMoney);
  }
  
  return(
    <Router>
      <Wrapper> 

        <Header>
          <InfoIcon color={ colorList.darkBrown } pos="top" />
        </Header>

        <Container>

          <UserPanel
            username={ username }
            password={ password }
            email={ email }
            avatarUrl={ avatarUrl }
            userLevel={ userLevel }
            userExperience={ userExperience }
            userMoney={ userMoney } />

          <Switch>
            <Route path="/shop">
              <MainBox type="Center">
                <TopSection color={ colorList.white } padding="15px 15px" isBoard={ false }>
                </TopSection>
                <BottomSection color={ colorList.mainOrange } padding="15px 15px">
                  <Link to="/shop"><NavigationButton active>Shop</NavigationButton></Link>
                  <Link to="/"><NavigationButton>Farm</NavigationButton></Link>
                  <Link to="/market"><NavigationButton>Market</NavigationButton></Link>
                  <InfoIcon color={ colorList.white } pos="bottom" />
                </BottomSection>
              </MainBox>
            </Route>

            <Route path="/" exact>
              <MainBox type="Center">
                <TopSection color={ colorList.white } padding="15px 15px" isBoard={ true }>
                  <Board />
                </TopSection>
                <BottomSection color={ colorList.mainOrange } padding="15px 15px">
                  <Link to="/shop"><NavigationButton>Shop</NavigationButton></Link>
                  <Link to="/"><NavigationButton active>Farm</NavigationButton></Link>
                  <Link to="/market"><NavigationButton>Market</NavigationButton></Link>
                  <InfoIcon color={ colorList.white } pos="bottom" />
                </BottomSection>
              </MainBox>
            </Route>

            <Route path="/market">
              <MainBox type="Center">
                <TopSection color={ colorList.white } padding="15px 15px" isBoard={ false }>
                </TopSection>
                <BottomSection color={ colorList.mainOrange } padding="15px 15px">
                  <Link to="/shop"><NavigationButton>Shop</NavigationButton></Link>
                  <Link to="/"><NavigationButton>Farm</NavigationButton></Link>
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