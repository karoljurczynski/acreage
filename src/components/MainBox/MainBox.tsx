import { Wrapper } from './MainBoxStyles';

interface Props {
  type: string;
}

const MainBox: React.FC<Props> = ({ type, children }) => {
  return (
    <Wrapper type={ type }>
      { children }
    </Wrapper>
  )
}

export default MainBox;