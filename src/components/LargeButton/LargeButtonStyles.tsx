import styled from 'styled-components';
import colorList from '../../config/colorList';

interface Props {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${ colorList.white };
  color: ${ colorList.black };
  border: none;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  box-shadow: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 15px 0;
  margin-top: 10px;
  
  :hover, :focus {
    opacity: 0.65;
  }

  ${({ primary }) => primary && `
    background-color: ${ colorList.mainOrange };
    box-shadow: 1px 1px 3px ${ colorList.textGray };
  `}

  ${({ secondary }) => secondary && `
    border: 1px solid ${ colorList.mainOrange };
  `}

  ${({ tertiary }) => tertiary && `
    color: ${ colorList.mainOrange };
    border: 1px solid ${ colorList.textGray };
  `}
`;