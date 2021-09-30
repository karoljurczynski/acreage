// IMPORTS


import { Wrapper, InfoBoxHeading, InfoBoxText, Star } from './FieldMenuInfoBoxStyles';
import emptyStar from '../../images/stats/empty_star.png';
import filledStar from '../../images/stats/filled_star.png';
import { FieldMenuInfoBoxInterface } from '../interfaces';


// COMPONENT


const FieldMenuInfoBox: React.FC<FieldMenuInfoBoxInterface> = ({ rateInfoBox, title, content }): JSX.Element => {


  // TOOL FUNCTIONS


  const setStars = (): string[] => {
    let returnedContent: string[] = [];
    for (let i: number = 1; i <= 5; i++)
      i <= content ? returnedContent.push(filledStar) : returnedContent.push(emptyStar);
    return returnedContent;
  }


  // JSX


  return (
    <Wrapper>
      <InfoBoxHeading>{title}</InfoBoxHeading>
      <InfoBoxText>
        { rateInfoBox
          ? setStars().map((starType: string) => <Star src={starType} />)
          : content
        }
      </InfoBoxText>
    </Wrapper>
  )
}

export default FieldMenuInfoBox;