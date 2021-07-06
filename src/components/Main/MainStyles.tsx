import styled from 'styled-components';
import colorList from '../../config/colorList';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: fit-content;
  height: calc(100vh - 150px);
  width: 800px;
  background: ${colorList.white};
  margin: 0 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${colorList.textGray};
`;