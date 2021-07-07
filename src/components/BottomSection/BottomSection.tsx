import { Wrapper } from './BottomSectionStyles';

interface BottomSectionProps {
  color: string;
  padding: string;
}

const BottomSection: React.FC<BottomSectionProps> = ({ color, padding, children }) => {
  return (
    <Wrapper color={ color } padding={ padding }>
      { children }
    </Wrapper>
  )
}

export default BottomSection;