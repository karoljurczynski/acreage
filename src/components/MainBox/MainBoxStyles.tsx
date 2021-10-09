import styled from 'styled-components';
import colorList from '../../config/colorList';

interface WrapperProps {
  type: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ type }) => type === "Right" ? "flex-start" : "space-between" };
  height: calc(100vh - 150px);
  background: ${ colorList.white };
  min-width: ${({ type }) => type === "Right" ? "294px" : "0" };
  width: ${({ type }) => { 
    if (type === "Center") return "880px";
    if (type === "Left") return "300px";
    if (type === "Right") return "294px";
  }};
  margin: ${({ type }) => type === "Center" ? "0 20px" : "0 0" };
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${ colorList.textGray };
`;