import { Wrapper } from './TopSectionStyles';

interface Props {
  color: string;
  padding: string;
  isBoard?: boolean;
}

const TopSection: React.FC<Props> = ({ color, padding, isBoard, children }) => {
  return (
    <Wrapper color={ color } padding={ padding } isBoard={ isBoard }>
      { children }
    </Wrapper>
  )
}

export default TopSection;