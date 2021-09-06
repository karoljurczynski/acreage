import styled from 'styled-components';
import colorList from '../../config/colorList';

interface WrapperProps {
  fieldProperties?: boolean;
  width?: number;
  hide?: boolean;
}

interface SelectListItemProps {
  heading?: boolean;
}

interface MainProps {
  fullSize?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px 8px 8px 0;
  width: 224px;
  background-color: ${colorList.white};
  z-index: 0;
  box-shadow: 1px 1px 5px #c5c5c5;

  ${({ fieldProperties }) => fieldProperties && `
    position: absolute;
    z-index: 1;
  `}

  ${({ hide }) => hide && `
    display: none;
  `}
  ${({ width }) => width && `
    width: ${ width }px;
  `}
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

export const Main = styled.main<MainProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  width: 100%;
  margin-top: 20px;

  ${({ fullSize }) => fullSize && `
    grid-template-columns: 1fr;
  `}
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

export const Name = styled.h3`
  margin-top: 8px;
  color: ${ colorList.white };
  font-size: 24px;
`;

export const FieldNumber = styled.p`
  color: ${ colorList.black };
  font-weight: bold;
  font-size: 12px;
`;

export const SelectListContainer = styled.ul`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
`;

export const SelectListItem = styled.li<SelectListItemProps>`
  width: 100%;
  height: 50px;
  padding: 5px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ heading }) => heading && `

  `}
`;