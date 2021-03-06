import styled from 'styled-components';
import colorList from '../../config/colorList';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${ colorList.backgroundGray };
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;