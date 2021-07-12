import styled from 'styled-components';
import colorList from '../../config/colorList';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 80px;
  height: 80px;
  background-color: ${ colorList.mainOrange };
  border-radius: 8px;
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const CropIcon = styled.img`
  width: 40%;
  height: 40%;
`;

export const CropAmount = styled.h4`
  font-size: 20px;
  color: ${ colorList.white };
  margin-bottom: 8px;


`;