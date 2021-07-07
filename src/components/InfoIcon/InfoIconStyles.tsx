import styled from 'styled-components';

interface IconProps {
  color: string;
  pos: string;
}

export const Icon = styled.button<IconProps>`
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: ${({ pos }) => pos === "top" ? "5px" : "auto" };
  bottom: ${({ pos }) => pos === "bottom" ? "5px" : "auto" };
  right: 5px;
  cursor: pointer;
  background-color: transparent;

  :hover, :focus {
    opacity: 0.65;
  }

  svg {
    fill: ${({ color }) => color };
    height: 100%;
    width: 100%;
  }
`;