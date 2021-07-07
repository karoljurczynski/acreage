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

export const InfoIcon = styled.button`
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  background-color: transparent;

  :hover, :focus {
    opacity: 0.65;
  }

  svg {
    fill: ${ colorList.mainOrange };
    height: 100%;
    width: 100%;
  }
`;