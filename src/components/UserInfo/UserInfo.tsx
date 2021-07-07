import { Wrapper, UserAvatarContainer, UserAvatarPhoto, UserName, UserLevel } from './UserInfoStyles';
import logo from '../../images/logo.png';

const UserInfo = () => {
  return (
    <Wrapper>
      <UserAvatarContainer>
        <UserAvatarPhoto src={ logo }/>
      </UserAvatarContainer>
      <UserName>Username</UserName>
      <UserLevel>12 level</UserLevel>
    </Wrapper>
  )
}

export default UserInfo;