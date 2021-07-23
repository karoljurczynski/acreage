import styled from 'styled-components';
import colorList from '../../config/colorList';

interface ButtonProps {
  size: "half" | "full";
  buttonFor?: "time" | "barn";
}

interface TextContentProps {
  size: "half" | "full";
  buttonFor?: "time" | "barn";
  color?: "primary" | "watered" | "fertilized" | "red";
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

  ${({ size }) => (size === "half") && `
    :nth-of-type(2) {
      margin-right: 12px;
    }
  `};

  ${({ size }) => (size === "full") && `
    width: 184px;
    margin-bottom: 12px;
  `};

  ${({ buttonFor }) => buttonFor && `
    align-items: flex-start;
    padding-left: 15px;
  `};
`;

export const ButtonHeading = styled.h4`
  font-size: 14px;
  color: ${ colorList.textGray };
`;

export const ButtonTextContent = styled.p<TextContentProps>`
  font-size: 16px;
  color: ${ colorList.textGray };

  ${({ color }) => color === "primary" && `
    color: ${ colorList.mainOrange };
  `};

  ${({ color }) => color === "fertilized" && `
    color: ${ colorList.darkBrown };
  `};

  ${({ color }) => color === "watered" && `
    color: ${ colorList.blue };
  `};

  ${({ color }) => color === "red" && `
    color: ${ colorList.warningRed };
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