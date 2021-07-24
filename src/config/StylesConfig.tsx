import { createGlobalStyle } from 'styled-components';
import colorList from './colorList';

export const root = document.querySelector("#root") as HTMLElement;
export const portal = document.querySelector("#portal") as HTMLElement;
const StylesConfig = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
    font-family: Amaranth, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${colorList.black};
    user-select: none;
  }

  #portal {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export default StylesConfig;