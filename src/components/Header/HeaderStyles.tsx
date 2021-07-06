import styled from 'styled-components';
import colorList from '../../config/colorList';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
`;

export const LogoContainer = styled.picture`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 60%;
  background-color: ${colorList.mainOrange};
  border-radius: 50%;
`;

export const LogoImage = styled.img`
  display: block;
  width: 50%;
  height: 50%;
`;

export const Heading = styled.h1`
  margin-top: 5px;
  color: ${colorList.darkBrown};
  font-weight: bold;
  font-size: 24px;
`;