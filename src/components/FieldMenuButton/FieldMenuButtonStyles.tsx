import styled from 'styled-components';
import colorList from '../../config/colorList';

interface ButtonProps {
  size: "half" | "full";
  buttonFor?: "Time" | "Barn";
  margin?: string;
}

interface TextContentProps {
  size: "half" | "full";
  buttonFor?: "Time" | "Barn";
  color?: "primary" | "watered" | "fertilized" | "red";
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
  width: 86px;
  height: 86px;
  border-radius: 5px;
  cursor: pointer;
  
  ${({ size }) => (size === "full") && `
    width: 184px;
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

  ${({ margin }) => margin && `
    margin: ${ margin };
  `}
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