import styled from 'styled-components';
import colorList from '../../config/colorList';

interface Props {
  color: string;
  padding: string;
}

export const Wrapper = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: ${({ color }) => color === colorList.white ? "column" : "row"};
  align-items: center; 
  justify-content: center;
  width: 100%;
  padding: ${({ padding }) => padding };
  border-radius: 0 0 10px 10px;
  background-color: ${({ color }) => color };
`;