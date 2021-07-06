import styled from 'styled-components';
import colorList from '../../config/colorList';

interface WrapperProps {
  type: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: fit-content;
  height: calc(100vh - 150px);
  background: ${ colorList.white };
  width: ${({ type }) => type === "Aside" ? "330px" : "800px" };
  margin: ${({ type }) => type === "Aside" ? "0 0" : "0 20px" };
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${ colorList.textGray };
`;