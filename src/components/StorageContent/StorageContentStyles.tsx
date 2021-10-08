import styled from 'styled-components';
import colorList from '../../config/colorList';

interface BlockProps {
  itemType: string;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Block = styled.div<BlockProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-right: 15px;
  cursor: pointer;

  ${({ itemType }) => itemType === "Crop" && `
    background-color: ${ colorList.mainOrange };
  `}

  ${({ itemType }) => itemType === "Seed" && `
    background-color: ${ colorList.green };
  `}

  ${({ itemType }) => itemType === "Part" && `
    background-color: ${ colorList.darkBrown };
  `}

  ${({ itemType }) => itemType === "Blueprint" && `
    background-color: ${ colorList.blueprint };
  `}

  :hover {
    opacity: 0.85;
  }
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