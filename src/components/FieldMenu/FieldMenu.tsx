import { 
  Wrapper, 
  TopSection, 
  HeadingContainer, 
  CropImageContainer, 
  CropImage, 
  CropName, 
  FieldNumber,
  Main,
  BottomSection 
} from './FieldMenuStyles';

import FieldMenuButton from '../FieldMenuButton/FieldMenuButton';
import { useEffect } from 'react';
import logo from '../../images/logo.png';
import LargeButton from '../LargeButton/LargeButton';

interface FieldMenuProps {
  closeFieldMenu: () => void;
  fieldId: number,
  fieldCrop: string,
  fieldStatus: string
}

const FieldMenu: React.FC<FieldMenuProps> = ({ closeFieldMenu, fieldId, fieldCrop, fieldStatus }) => {
  const mainRoot = document.querySelector("#root") as HTMLElement;

  useEffect(() => {
    //mainRoot.style.pointerEvents = "none";

    return () => { mainRoot.style.pointerEvents = "auto" }

  });

  return (
    <Wrapper>

      <TopSection>
        <HeadingContainer>
          <CropImageContainer>
            <CropImage src={ logo } />
          </CropImageContainer>
          <CropName>{ fieldCrop }</CropName>
          <FieldNumber>{ `Field #${ fieldId + 1 }` }</FieldNumber>
        </HeadingContainer>
        <Main>
          <FieldMenuButton size="full" buttonFor="time" textContent="14:20" />
          <FieldMenuButton size="half" textContent="Watered" />
          <FieldMenuButton size="half" textContent="Fertilized" />
        </Main>
      </TopSection>

      <BottomSection>
        <LargeButton onClick={ closeFieldMenu } secondary>Field properties</LargeButton>
        <LargeButton onClick={ closeFieldMenu } primary>Close</LargeButton>
      </BottomSection>

    </Wrapper>
  )
}

export default FieldMenu;