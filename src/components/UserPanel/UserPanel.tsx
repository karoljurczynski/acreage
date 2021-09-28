import colorList from '../../config/colorList';
import MainBox from '../MainBox/MainBox';
import LargeButton from '../LargeButton/LargeButton';
import TopSection from '../TopSection/TopSection';
import BottomSection from '../BottomSection/BottomSection';
import InfoBox from '../InfoBox/InfoBox';
import { UserInfo, UserAvatarContainer, UserAvatarPhoto, UserName, UserLevel } from './UserPanelStyles';
import logo from '../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { UserInterface } from '../../redux/reducers/userReducer';



export const UserPanel: React.FC = () => {
  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);  
  const userData: UserInterface = state.userData;

  return (
    <MainBox type="Left">

          <TopSection color={ colorList.mainOrange } padding="30px 15px">
            <UserInfo>
              <UserAvatarContainer>
                <UserAvatarPhoto src={ logo }/>
              </UserAvatarContainer>
              <UserName>{ userData.settings.username }</UserName>
              <UserLevel>{ userData.gameplay.userLevel } lvl</UserLevel>
            </UserInfo>
            <InfoBox property="Money" cashAmount={ userData.gameplay.userMoney } />
            <InfoBox property="Experience" currentXp={ userData.gameplay.userExperience } xpToNextLevel={ 20 }/>
            <InfoBox property="Next action finished" min={ 1 } sec={ 10 } />
          </TopSection>

          <BottomSection color={ colorList.white } padding="20px 20px">
            <LargeButton onClick={ () => {} } secondary>Settings</LargeButton>
            <LargeButton onClick={ () => {} } primary>Log out</LargeButton>
          </BottomSection>

    </MainBox>
  )
}

export default UserPanel;