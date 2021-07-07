import { Wrapper, ContentContainer, Property, Value, InfoIcon } from './InfoBoxStyles';
import { FaInfoCircle } from 'react-icons/fa'

interface InfoBoxProps {
  property: "Money" | "Experience" | "Next action finished";
  infoIconOnClickFunction?: () => void;
  cashAmount?: number;
  currentXp?: number;
  xpToNextLevel?: number;
  min?: number;
  sec?: number;
}

const InfoBox: React.FC<InfoBoxProps> = ({ property, cashAmount, currentXp, xpToNextLevel, min, sec, infoIconOnClickFunction }) => {
  const selectValuePattern = (): string => {
    let valuePattern: string = "";
    switch (property) {
      case "Money": {
        valuePattern = `${ cashAmount } $`;
        break;
      }
      case "Experience": {
        valuePattern = `${ currentXp } / ${ xpToNextLevel } xp`;
        break;
      }
      case "Next action finished": {
        valuePattern = `${ min }:${ sec } min`;
        break;
      }
    }
    return valuePattern;
  }

  return (
    <Wrapper>
      <ContentContainer>
        <Property>{ property }</Property>
        <Value>{ selectValuePattern() }</Value>
      </ContentContainer>
      <InfoIcon onClick={ infoIconOnClickFunction }>
        <FaInfoCircle />
      </InfoIcon>
    </Wrapper>
  )
}

export default InfoBox;