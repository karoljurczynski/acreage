// IMPORTS


import styled from 'styled-components';
import colorList from '../../config/colorList';


// STYLES


export const Wrapper = styled.div`
  background-color: ${ colorList.white };
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 2fr;
  grid-column: 1 / 3;
  height: 86px;
  border-radius: 5px;
  padding-left: 15px;
`;
export const InfoBoxHeading = styled.h4`
  font-size: 14px;
  margin-bottom: 3px;
  color: ${ colorList.textGray };
`;
export const InfoBoxText = styled.p`
  font-size: 24px;
  color: ${ colorList.black };
`;
export const Star = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 4px;

  :last-of-type {
    margin-right: 0;
  }
`;