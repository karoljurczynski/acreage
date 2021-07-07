import { Wrapper } from './TopSectionStyles';

interface Props {
  color: string;
  padding: string;
}

const TopSection: React.FC<Props> = ({ color, padding, children }) => {
  return (
    <Wrapper color={ color } padding={ padding }>
      { children }
    </Wrapper>
  )
}

export default TopSection;