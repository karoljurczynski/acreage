import styled from 'styled-components';
import colorList from '../../config/colorList';

export const Wrapper = styled.div`
  position: relative;
  color: ${ colorList.black };
  width: 100%;
  background-color: ${ colorList.white };
  border-radius: 6px;
  padding: 20px;
  margin-top: 12px;
`;

export const ContentContainer = styled.section`
  color: ${ colorList.black };
`;

export const Property = styled.h5`
  font-size: 14px;
  color: ${ colorList.textGray };
`;

export const Value = styled.p`
  font-size: 24px;
  color: ${ colorList.black };
`;