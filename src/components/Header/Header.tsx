import { Wrapper, LogoContainer, LogoImage, Heading } from './HeaderStyles';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <LogoImage src={ logo } />
      </LogoContainer>
      <Heading>Acreage</Heading>
    </Wrapper>
  )
}

export default Header;