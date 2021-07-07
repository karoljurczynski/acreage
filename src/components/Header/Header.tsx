import { Wrapper, LogoContainer, LogoImage, Heading } from './HeaderStyles';
import logo from '../../images/logo.png';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Wrapper>
      <LogoContainer>
        <LogoImage src={ logo } />
      </LogoContainer>
      <Heading>Acreage</Heading>
      { children }
    </Wrapper>
  )
}

export default Header;