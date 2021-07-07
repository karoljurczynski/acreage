import { Wrapper, Container } from './AppStyles';
import colorList from '../../config/colorList';
import Header from '../Header/Header';
import MainBox from '../MainBox/MainBox';
import LargeButton from '../LargeButton/LargeButton';
import TopSection from '../TopSection/TopSection';
import BottomSection from '../BottomSection/BottomSection';
import UserInfo from '../UserInfo/UserInfo';
import InfoBox from '../InfoBox/InfoBox';

const App = () => {
  return(
    <Wrapper>

      <Header />

      <Container>

        <MainBox type="Aside">

          <TopSection color={ colorList.mainOrange }>
            <UserInfo />
            <InfoBox property="Money" cashAmount={ 100 } />
            <InfoBox property="Experience" currentXp={ 120 } xpToNextLevel={ 200 }/>
            <InfoBox property="Next action finished" min={ 12 } sec={ 20 } />
          </TopSection>

          <BottomSection color={ colorList.white }>
            <LargeButton secondary>Settings</LargeButton>
            <LargeButton primary>Log out</LargeButton>
          </BottomSection>

        </MainBox>

        <MainBox type="Main">
          <TopSection color={ colorList.white }>
          </TopSection>
          <BottomSection color={ colorList.mainOrange }>
          </BottomSection>
        </MainBox>
        
        <MainBox type="Aside">
          <TopSection color={ colorList.mainOrange }>
          </TopSection>
          <BottomSection color={ colorList.white }>
          </BottomSection>
        </MainBox>
      </Container>

    </Wrapper>
  )
}

export default App;