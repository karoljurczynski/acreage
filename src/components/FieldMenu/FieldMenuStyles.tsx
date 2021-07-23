import styled from 'styled-components';
import colorList from '../../config/colorList';

interface ButtonsProps {
  buttonType: "time" | "water" | "fertilizer";
}

export const Heading = styled.h1`
  color: ${ colorList.black };
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px 8px 8px 0;
  width: 224px;
  background-color: ${colorList.white};
  z-index: 2;
  box-shadow: 1px 1px 5px #c5c5c5;
`;

export const TopSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px 8px 0 0;
  background-color: ${ colorList.mainOrange };
  padding: 20px;
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const BottomSection = styled.section`
  padding: 40px 20px 20px;
  width: 100%;
  font-size: 14px;
`;

export const HeadingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`;

export const CropImageContainer = styled.picture`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${ colorList.white };
  border-radius: 50%;
`;

export const CropImage = styled.img`
  display: block;
  width: 50%;
  height: 50%;
`;

export const CropName = styled.h3`
  margin-top: 8px;
  color: ${ colorList.white };
  font-size: 22px;
`;

export const FieldNumber = styled.p`
  color: ${ colorList.black };
  font-size: 16px;
`;

export const HalfButton = styled.button<ButtonsProps>`
  display: block;
  width: 86px;
  height: 86px;
  border-radius: 5px;

  :nth-of-type(2) {
    margin-right: 12px;
  }
`;

export const FullButton = styled.button<ButtonsProps>`
  display: block;
  width: 184px;
  height: 86px;
  border-radius: 5px;
  margin-bottom: 12px;
`;
