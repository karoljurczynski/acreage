import styled from 'styled-components';
import colorList from '../../config/colorList';
import { crops } from '../../config/crops';
import { buildings } from '../../config/buildings';

interface FieldProps {
  fieldCrop?: string;
  fieldBuilding?: string;
  fieldStatus?: boolean;
}

const disabledField: string = "rgba(255, 255, 255, 0.4)";
const disabledFieldHover: string = "rgba(255, 255, 255, 0.6)";
const emptyFieldHover: string = "rgba(148, 126, 82, 0.6)"

export const FieldSegment = styled.button<FieldProps>`
  width: 100%;
  height: 100%;
  background: ${ disabledField };
  color: ${ colorList.black };
  cursor: pointer;
  z-index: 1;

  :hover, :focus {
    background: ${ disabledFieldHover };
  }

  ${({ fieldStatus }) => fieldStatus && `

    :hover, :focus {
      background: ${ colorList.darkBrown };
      border: 1px solid black;
    }
  `};

  ${({ fieldCrop }) => fieldCrop && `
    background: ${ colorList.green };
    
    :hover, :focus {
      background: ${ colorList.green };
      border: 1px solid black;
    }
  `};

  ${({ fieldBuilding }) => fieldBuilding && `
    background: ${ colorList.black };
    
    :hover, :focus {
      background: ${ colorList.black };
      border: 1px solid black;
    }
  `};
`;

export const FieldIcon = styled.img`
  width: 45%;
  height: auto;
`;