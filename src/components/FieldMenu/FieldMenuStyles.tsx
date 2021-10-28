import styled from 'styled-components';
import colorList from '../../config/colorList';


interface WrapperProps {
  fieldProperties?: boolean;
  warning?: boolean;
  width?: number;
  hide?: boolean;
}
interface TopSectionPropsInterface {
  alignItems?: string;
}
interface BottomSectionPropsInterface {
  warning?: boolean;
}
interface SelectListItemProps {
  heading?: boolean;
}
interface MainProps {
  fullSize?: boolean;
}


export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 0px 3px ${colorList.textGray}, -1px 0px 3px ${colorList.textGray}, 0px 1px 3px ${colorList.textGray}, 0px -1px 3px ${colorList.textGray};
  border-radius: 10px;
  width: 224px;
  margin: 5px;
  z-index: 2;

  ${({ hide }) => hide && `
    display: none;
  `}
  ${({ width }) => width && `
    width: ${ width }px;
  `}
  ${({ warning }) => warning && `
    width: 400px;
  `}
`;

export const TopSection = styled.section<TopSectionPropsInterface>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px 10px 0 0;
  background: ${colorList.backgroundGradient};
  padding: 20px;

  ${({ alignItems }) => alignItems && `
    align-items: ${alignItems};
  `}
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

export const BottomSection = styled.section<BottomSectionPropsInterface>`
  padding: 40px 20px 20px;
  background-color: ${colorList.white};
  border-radius: 0 0 10px 10px;
  width: 100%;

  ${({ warning }) => warning && `
    padding: 20px 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `}
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
  text-shadow: 1px 1px 1px black;
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
  position: relative;
  cursor: pointer;

  ${({ heading }) => !heading && `
    ::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  `}
`;
export const SelectListItemText = styled.p`
  height: 70%;
  width: auto;
`;
export const SelectListItemImage = styled.img`
  height: 90%;
  width: auto;
`;
export const SelectListItemWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;
interface WindowButtonPropsInterface {
  primary?: boolean;
  secondary ?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
}
export const WindowButton = styled.button<WindowButtonPropsInterface>`
  background-color: ${ colorList.white };
  color: ${ colorList.black };
  border: none;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  box-shadow: none;
  cursor: pointer;
  border-radius: 5px;
  width: 80px;
  padding: 10px 0;

  :last-of-type {
    margin-left: 8px;
  }
  
  ${({ primary }) => primary && `
    background-color: ${ colorList.mainOrange };
    box-shadow: 1px 1px 3px ${ colorList.textGray };
    :hover, :focus {
      opacity: 0.85;
    }
  `}
  ${({ secondary }) => secondary && `
    border: 1px solid ${ colorList.mainOrange };
    :hover, :focus {
      background-color: #f7f7f7;
    }
  `}
  ${({ tertiary }) => tertiary && `
    color: ${ colorList.mainOrange };
    border: 1px solid ${ colorList.textGray };
  `}
  ${({ disabled }) => disabled && `
    :hover, :focus {
      opacity: 0.5; 
    }
    opacity: 0.5;
  `}
`;
