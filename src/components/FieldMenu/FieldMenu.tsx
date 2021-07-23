import { 
  Wrapper, 
  TopSection, 
  HeadingContainer, 
  CropImageContainer, 
  CropImage, 
  CropName, 
  FieldNumber,
  Main,
  HalfButton,
  FullButton,
  BottomSection 
} from './FieldMenuStyles';

import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../images/logo.png';
import LargeButton from '../LargeButton/LargeButton';

interface FieldMenuProps {
  closeFieldMenu: () => void;
}

const FieldMenu: React.FC<FieldMenuProps> = ({ closeFieldMenu }) => {
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
          <CropName>Potatoes</CropName>
          <FieldNumber>Field #3</FieldNumber>
        </HeadingContainer>
        <Main>
          <FullButton buttonType="time">14:20</FullButton>
          <HalfButton buttonType="water">Watered</HalfButton>
          <HalfButton buttonType="fertilizer">Fertilized</HalfButton>
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