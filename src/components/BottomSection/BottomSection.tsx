import { Wrapper } from './BottomSectionStyles';

interface Props {
  color: string;
}

const BottomSection: React.FC<Props> = ({ color, children }) => {
  return (
    <Wrapper color={ color }>
      { children }
    </Wrapper>
  )
}

export default BottomSection;