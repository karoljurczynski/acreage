import styled from 'styled-components';
import colorList from '../../config/colorList';

interface ButtonProps {
  size: "half" | "full";
  buttonFor?: "Time" | "Barn";
}

interface TextContentProps {
  size: "half" | "full";
  buttonFor?: "Time" | "Barn";
  primary?: boolean;
  failed?: boolean;
  watered?: boolean;
  fertilized?: boolean;
}

export const Button = styled.button<ButtonProps>`
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
  
  ${({ size }) => (size === "full") && `
    grid-column: 1 / 3;
    width: 2fr;
  `};

  ${({ buttonFor }) => buttonFor && `
    align-items: flex-start;
    cursor: default;
    padding-left: 15px;
  `};

  ${({ buttonFor }) => !buttonFor && `
    :hover, :focus {
      opacity: 0.65;
    }
  `};
`;

export const ButtonHeading = styled.h4`
  font-size: 14px;
  color: ${ colorList.textGray };
`;

export const ButtonTextContent = styled.p<TextContentProps>`
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

  ${({ size, buttonFor }) => (size === "full" && buttonFor) && `
    font-size: 24px;
    color: ${ colorList.black };
  `}
`;

export const ButtonIcon = styled.img`
  display: block;
  width: auto;
  height: 40%;
  margin-bottom: 5px;
`;