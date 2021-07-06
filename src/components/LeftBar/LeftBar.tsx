import { Wrapper, BottomSection } from './LeftBarStyles';
import UserDataContainer from '../UserDataContainer/UserDataContainer';
import Button from '../Button/Button';

const LeftBar = () => {
  return (
    <Wrapper>
      <UserDataContainer />
      <BottomSection>
        <Button />
        <Button />
      </BottomSection>
    </Wrapper>
  )
}

export default LeftBar;