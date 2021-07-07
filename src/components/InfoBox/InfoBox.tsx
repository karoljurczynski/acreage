import { Wrapper, ContentContainer, Property, Value } from './InfoBoxStyles';
import colorList from '../../config/colorList';
import InfoIcon from '../InfoIcon/InfoIcon';

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
      <InfoIcon 
        color={ colorList.mainOrange }
        pos="top"
        onClickFunction={ infoIconOnClickFunction } />
    </Wrapper>
  )
}

export default InfoBox;