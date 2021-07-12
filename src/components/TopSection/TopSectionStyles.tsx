import styled from 'styled-components';
import colorList from '../../config/colorList';
import grass from '../../images/grass.jpg';

interface Props {
  color: string;
  padding: string;
  isBoard?: boolean;
}

export const Wrapper = styled.div<Props>`
  position: relative;
  width: 100%;
  padding: ${({ padding }) => padding };
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${ grass });
  background: ${({ color, isBoard }) => !isBoard ? color : null };
  border-radius: 10px 10px 0 0;
  box-shadow: ${({ color }) => color !== colorList.white ? `0px 1px 3px ${ colorList.textGray }` : "none" };

  ${({ isBoard }) => isBoard && `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;

    :before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${ colorList.white };
      opacity: 0.50;
    }
  `}
`;