// IMPORTS


import styled from 'styled-components';
import colorList from '../../config/colorList';

interface ButtonPropsInterface {
  isLarge: boolean;
  buttonFor?: string;
}
interface ButtonTextPropsInterface {
  primary?: boolean;
  failed?: boolean;
  watered?: boolean;
  fertilized?: boolean;
}


// STYLES


export const Button = styled.button<ButtonPropsInterface>`
  background-color: ${ colorList.white };
  color: ${ colorList.black };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1fr;
  height: 86px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: ${ colorList.hoverGray };
  }

  ${({ isLarge }) => isLarge && `
    grid-column: 1 / 3;
    width: 2fr;
  `};
`;

export const ButtonHeading = styled.h4`
  font-size: 14px;
  color: ${ colorList.textGray };
`;

export const ButtonText = styled.p<ButtonTextPropsInterface>`
  font-size: 16px;
  color: ${ colorList.textGray };

  ${({ primary }) => primary && `
    color: ${ colorList.mainOrange };
  `};

  ${({ failed }) => failed && `
    color: ${ colorList.warningRed };
  `};

  ${({ watered }) => watered && `
    color: ${ colorList.blue };
  `};

  ${({ fertilized }) => fertilized && `
    color: ${ colorList.darkBrown };
  `};
`;

export const ButtonIcon = styled.img`
  display: block;
  width: auto;
  height: 40%;
  margin-bottom: 5px;
`;