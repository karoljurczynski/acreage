import styled from 'styled-components';
import colorList from '../../config/colorList';

interface Props {
  color: string;
}

export const Wrapper = styled.div<Props>`
  width: 100%;
  padding: 30px 15px;
  background-color: ${({ color }) => color };
  border-radius: 10px 10px 0 0;
  box-shadow: ${({ color }) => color !== colorList.white ? `0px 1px 3px ${ colorList.textGray }` : "none" };
`;