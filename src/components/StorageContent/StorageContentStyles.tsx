import styled from 'styled-components';
import colorList from '../../config/colorList';

interface BlockProps {
  itemType: string;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: transparent;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Block = styled.div<BlockProps>`
  width: 80px;
  height: 80px;
  position: relative;
  background: transparent;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-right: 12px;
  opacity: 1;

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

  :nth-of-type(3n) {
    margin-right: 0;
    margin-bottom: 12px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const CropIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const CropAmount = styled.h4`
  font-size: 16px;
  margin: 5px 0 12px;
  text-shadow: 1px 1px 1px black;
  color: ${colorList.white};
`;