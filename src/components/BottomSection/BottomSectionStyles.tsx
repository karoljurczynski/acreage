import styled from 'styled-components';

interface Props {
  color: string;
}

export const Wrapper = styled.section<Props>`
  width: 100%;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  background-color: ${({ color }) => color };
`;