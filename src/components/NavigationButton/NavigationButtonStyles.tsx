import styled from 'styled-components';
import colorList from '../../config/colorList';

interface Props {
  active?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${ colorList.white };
  color: ${({ active }) => active ? colorList.black : colorList.textGray };
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 0;
  width: 130px;

  :nth-of-type(2) {
    margin: 0 15px;
  }

  :hover, :focus {
    color: ${ colorList.black };
    opacity: ${({ active }) => active ? "0.8" : "1" };
  }
`;