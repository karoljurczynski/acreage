import styled from 'styled-components';
import colorList from '../../config/colorList';
import { crops } from '../../config/crops';
import { buildings } from '../../config/buildings';

interface FieldProps {
  fieldCrop?: string;
  fieldBuilding?: string;
  fieldStatus?: boolean;
  isReadyToHarvest?: boolean;
}

const disabledField: string = "rgba(255, 255, 255, 0.4)";
const disabledFieldHover: string = "rgba(255, 255, 255, 0.6)";
const emptyFieldHover: string = "rgba(148, 126, 82, 0.6)"

export const FieldSegment = styled.button<FieldProps>`
  width: 100%;
  height: 100%;
  transition: 0.3s ease;
  background: ${ disabledField };
  color: ${ colorList.black };
  cursor: pointer;
  position: relative;
  z-index: 1;

  :hover, :focus {
    ::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      opacity: 0.45;
    }
  }

  ${({ fieldStatus }) => fieldStatus && `
    background: ${ colorList.darkBrown };
  `};

  ${({ fieldCrop }) => fieldCrop && `
    background: ${ colorList.lightGreen };
    img {
      width: 50%;
    }
  `};

  ${({ fieldBuilding }) => fieldBuilding && `
    background: ${ colorList.darkBrown };
  `};

  ${({ isReadyToHarvest }) => isReadyToHarvest && `
    background: ${ colorList.yellow };
  `};
`;

export const FieldIcon = styled.img`
  width: 65%;
  height: auto;
`;