import colorList from '../../config/colorList';
import MainBox from '../MainBox/MainBox';
import LargeButton from '../LargeButton/LargeButton';
import TopSection from '../TopSection/TopSection';
import BottomSection from '../BottomSection/BottomSection';
import InfoBox from '../InfoBox/InfoBox';
import { UserInfo, UserAvatarContainer, UserAvatarPhoto, UserName, UserLevel } from './UserPanelStyles';
import logo from '../../images/logo.png';

interface _UserPanel {
  username: string;
  password: string;
  email: string;
  avatarUrl: string;
  userLevel: number;
  userExperience: number;
  userMoney: number;
}

export const UserPanel: React.FC<_UserPanel> = ({ username, password, email, avatarUrl, userLevel, userExperience, userMoney }) => {
  return (
    <MainBox type="Left">

          <TopSection color={ colorList.mainOrange } padding="30px 15px">
            <UserInfo>
              <UserAvatarContainer>
                <UserAvatarPhoto src={ logo }/>
              </UserAvatarContainer>
              <UserName>{ username }</UserName>
              <UserLevel>{ userLevel } lvl</UserLevel>
            </UserInfo>
            <InfoBox property="Money" cashAmount={ userMoney } />
            <InfoBox property="Experience" currentXp={ userExperience } xpToNextLevel={ 200 }/>
            <InfoBox property="Next action finished" min={ 12 } sec={ 20 } />
          </TopSection>

          <BottomSection color={ colorList.white } padding="20px 20px">
            <LargeButton onClick={ () => {} } secondary>Settings</LargeButton>
            <LargeButton onClick={ () => {} } primary>Log out</LargeButton>
          </BottomSection>

    </MainBox>
  )
}

export default UserPanel;