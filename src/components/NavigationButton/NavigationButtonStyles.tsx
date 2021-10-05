import styled from 'styled-components';
import colorList from '../../config/colorList';

interface Props {
  active?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${ colorList.white };
  color: ${({ active }) => active ? colorList.black : colorList.textGray };
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  padding: 12px 0;
  width: 130px;
  margin: 0 4px;

  :hover, :focus {
    color: ${ colorList.black };
    opacity: ${({ active }) => active ? "0.85" : "1" };
  }
`;