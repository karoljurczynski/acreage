import styled from 'styled-components';
import colorList from '../../config/colorList';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: fit-content;
  height: calc(100vh - 150px);
  background: ${colorList.white};
  width: 350px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${colorList.textGray};
`;