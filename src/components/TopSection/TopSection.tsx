import { Wrapper } from './TopSectionStyles';

interface Props {
  color: string;
}

const TopSection: React.FC<Props> = ({ color, children }) => {
  return (
    <Wrapper color={ color }>
      { children }
    </Wrapper>
  )
}

export default TopSection;