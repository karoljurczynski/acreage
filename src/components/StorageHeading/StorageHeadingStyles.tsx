import styled from 'styled-components';
import colorList from '../../config/colorList';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Heading = styled.h2`
  font-size: 18px;
  color: ${ colorList.black };
`;

export const Subheading = styled.h4`
  font-size: 16px;
  color: ${ colorList.white };
`;