import styled from 'styled-components';
import colorList from '../../config/colorList';

interface FieldProps {
  fieldCrop: string;
  fieldStatus: string;
}

const disabledField: string = "rgba(255, 255, 255, 0.4)";
const disabledFieldHover: string = "rgba(255, 255, 255, 0.6)";
const emptyFieldHover: string = "rgba(148, 126, 82, 0.6)"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 8px;
  position: relative;
  z-index: 1;
  min-height: 600px;
  min-width: 600px;
  height: 600px;
  width: 600px;
  background: transparent;
`;

export const Field = styled.button<FieldProps>`
  width: 100%;
  height: 100%;
  background: ${ disabledField };
  color: ${ colorList.black };
  cursor: pointer;
  z-index: 1;

  :hover, :focus {
    background: ${ disabledFieldHover };
  }
  ${({ fieldStatus }) => fieldStatus === "empty" && `
    background: ${ colorList.darkBrown };
    
    :hover, :focus {
      background: ${ colorList.darkBrown };
      border: 1px solid black;
    }
  `};
`;

export const Road = styled.span`
  position: absolute;
  height: 8px;
  width: 8px;
  background: ${ colorList.lightBrown };
  z-index: 0;
  transform: translate(-50%, -50%);
  
  :nth-of-type(1) {
    width: 750px;
    left: 50%;
    top: 50%;
  }

  :nth-of-type(2) {
    width: 464px;
    left: 50%;
    top: 72px;
  }

  :nth-of-type(3) {
    width: 160px;
    left: calc(50%);
    top: 148px;
  }

  :nth-of-type(4) {
    width: 340px;
    left: calc(50% + 95px);
    top: 528px;
  }

  :nth-of-type(5) {
    width: 8px;
    height: 494px;
    left: 72px;
    top: calc(50% + 20px);
  }

  :nth-of-type(6) {
    width: 8px;
    height: 494px;
    left: 224px;
    top: calc(50% + 20px);
  }

  :nth-of-type(7) {
    width: 8px;
    height: 270px;
    left: 376px;
    top: calc(50% - 20px);
  }

  :nth-of-type(8) {
    width: 8px;
    height: 346px;
    left: 528px;
    top: calc(50% - 58px);
  }
`;