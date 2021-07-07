import { Wrapper, Container } from './AppStyles';
import colorList from '../../config/colorList';
import Header from '../Header/Header';
import MainBox from '../MainBox/MainBox';
import LargeButton from '../LargeButton/LargeButton';
import TopSection from '../TopSection/TopSection';
import BottomSection from '../BottomSection/BottomSection';
import UserInfo from '../UserInfo/UserInfo';
import InfoBox from '../InfoBox/InfoBox';
import InfoIcon from '../InfoIcon/InfoIcon';
import NavigationButton from '../NavigationButton/NavigationButton';
import StorageContent from '../StorageContent/StorageContent';
import StorageHeading from '../StorageHeading/StorageHeading';

const App = () => {
  return(
    <Wrapper>

      <Header>
        <InfoIcon color={ colorList.darkBrown } pos="top" />
      </Header>

      <Container>

        <MainBox type="Aside">

          <TopSection color={ colorList.mainOrange } padding="30px 15px">
            <UserInfo />
            <InfoBox property="Money" cashAmount={ 100 } />
            <InfoBox property="Experience" currentXp={ 120 } xpToNextLevel={ 200 }/>
            <InfoBox property="Next action finished" min={ 12 } sec={ 20 } />
          </TopSection>

          <BottomSection color={ colorList.white } padding="20px 20px">
            <LargeButton secondary>Settings</LargeButton>
            <LargeButton primary>Log out</LargeButton>
          </BottomSection>

        </MainBox>

        <MainBox type="Main">
          <TopSection color={ colorList.white } padding="15px 15px">



          </TopSection>

          <BottomSection color={ colorList.mainOrange } padding="15px 15px">
            <NavigationButton>Shop</NavigationButton>
            <NavigationButton active>Farm</NavigationButton>
            <NavigationButton>Market</NavigationButton>
            <InfoIcon color={ colorList.white } pos="bottom" />
          </BottomSection>

        </MainBox>
        
        <MainBox type="Aside">

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
  )
}

export default App;