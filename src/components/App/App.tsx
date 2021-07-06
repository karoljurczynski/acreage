import { Wrapper, Container } from './AppStyles';
import Header from '../Header/Header';
import LeftBar from '../LeftBar/LeftBar';
import Main from '../Main/Main';
import RightBar from '../RightBar/RightBar';

const App = () => {
  return(
    <Wrapper>

      <Header />

      <Container>
        <LeftBar />
        <Main />
        <RightBar />
      </Container>

    </Wrapper>
  )
}

export default App;