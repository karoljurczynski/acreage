import styled from 'styled-components';
import colorList from '../../config/colorList';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const UserAvatarContainer = styled.picture`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  background-color: ${colorList.white};
  border-radius: 50%;
`;

export const UserAvatarPhoto = styled.img`
  display: block;
  width: 50%;
  height: 50%;
`;

export const UserName = styled.h3`
  color: ${ colorList.white };
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;

export const UserLevel = styled.h4`
  color: ${ colorList.black };
  font-size: 14px;
  font-weight: bold;
`;