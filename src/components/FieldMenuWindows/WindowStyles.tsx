import styled from "styled-components";
import colorList from '../../config/colorList';

interface WindowWrapperPropsInterface {

}
interface WindowButtonPropsInterface {
  primary?: boolean;
  secondary ?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
}
interface WindowBarFullPropsInterface {
  percent: number;
}
interface WindowContainerPropsInterface {
  section?: boolean;
}
interface WindowTilePropsInterface {
  backgroundColor?: "white" | "green" | "warningRed" | "blueprint"; 
}
interface WindowTileTextsPropsInterface {
  textColor?: "gold" | "darkBrown" | "ground" | "lightBrown" | "blue" | "black" | "white" | "mainOrange";
  large?: boolean;
}

export const WindowWrapper = styled.div<WindowWrapperPropsInterface>`
  width: 426px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 1px 0px 3px ${colorList.textGray}, -1px 0px 3px ${colorList.textGray}, 0px 1px 3px ${colorList.textGray}, 0px -1px 3px ${colorList.textGray};
`;
export const WindowTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 35px;
  border-radius: 10px 10px 0 0;
  background: ${colorList.backgroundGradient};
`;
export const WindowBottomSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  padding: 18px 10px 10px;
  border-radius: 0 0 10px 10px;
  background: ${colorList.white};
`;


export const WindowColumnContainer = styled.div<WindowContainerPropsInterface>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${({section}) => section && `
    margin-bottom: 35px;
  `}

  :last-of-type {
    margin-bottom: 0;
  }
`;
export const WindowRowContainer = styled.div<WindowContainerPropsInterface>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  ${({section}) => section && `
    margin-bottom: 35px;
  `}
`;
export const WindowSectionVerticalSeparator = styled.span`
  display: block;
  height: 110px;
  margin: 0 25px;
  width: 2px;
  background: ${colorList.black};
`;
export const WindowSectionHorizontalSeparator = styled.span`
  display: block;
  height: 2px;
  margin: 35px 0;
  width: 100%;
  background: ${colorList.black};
`;
export const WindowBigImage = styled.img`
  height: 110px;
`;
export const WindowText = styled.p`
  margin-top: 0;
  margin-left: 2px;
  font-size: 13px;
  color: ${colorList.white};
`;
export const WindowBigHeading = styled.h1`
  margin: 3px 0 -2px;
  font-size: 32px;
  letter-spacing: -0.5px;
  color: ${colorList.black};
`;
export const WindowSmallHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: ${colorList.black};
`;
export const WindowBarContainer = styled.div`
  position: relative;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 22px;
  border-radius: 11px;
  z-index: 1;
  background: ${colorList.white};
  overflow: hidden;
`;

export const WindowBarFull = styled.span<WindowBarFullPropsInterface>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  height: 24px;
  z-index: -1;
  border-radius: 12px 0 0 12px;
  width: 100px;
  background: ${colorList.yellow};

  ${({percent}) => percent && `
    left: ${percent}%;
  `};
`;
export const WindowBarText = styled.p`
  font-size: 10px;
`;

export const WindowTile = styled.div<WindowTilePropsInterface>`
  width: 80px;
  height: 80px;
  background: ${colorList.white};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-right: 12px;
  
  :nth-of-type(4) {
    margin-right: 0;
  }
  :nth-of-type(5) {
    margin-top: 12px;
  }
  
  ${({backgroundColor}) => backgroundColor && `
    background: ${colorList[backgroundColor]};
  `};
`;
export const WindowTileIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const WindowTileHeading = styled.h3<WindowTileTextsPropsInterface>`
  font-size: 32px;
  color: ${colorList.mainOrange};
  line-height: 1;

  ${({textColor}) => textColor && `
    color: ${colorList[textColor]};
  `};
`;
export const WindowTileText = styled.p<WindowTileTextsPropsInterface>`
  font-size: 14px;
  margin: 5px 0 12px;
  color: ${colorList.black};

  ${({large}) => large && `
    font-size: 20px;
    margin: 5px 0 8px;
  `}

  ${({textColor}) => textColor && `
    color: ${colorList[textColor]};
  `};
`;

export const WindowButton = styled.button<WindowButtonPropsInterface>`
  background-color: ${ colorList.white };
  color: ${ colorList.black };
  border: none;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  box-shadow: none;
  cursor: pointer;
  border-radius: 5px;
  width: 80px;
  padding: 10px 0;

  :last-of-type {
    margin-left: 10px;
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