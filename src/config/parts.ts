// IMPORTS


import { PartInterface } from './interfaces';

import water from '../images/parts/water.png';
import fertilizer from '../images/parts/fertilizer.png';
import plank from '../images/parts/plank.png';
import brick from '../images/parts/brick.png';
import bolt from '../images/parts/bolt.png';
import pipe from '../images/parts/pipe.png';


// DATA


const parts: PartInterface = {
  Water: {
    partIcon: water,
    partPrice: 1,
    levelNeeded: 1
  },

  Fertilizer: {
    partIcon: fertilizer,
    partPrice: 1,
    levelNeeded: 1
  },

  Plank: {
    partIcon: plank,
    partPrice: 1,
    levelNeeded: 1
  },

  Brick: {
    partIcon: brick,
    partPrice: 1,
    levelNeeded: 1
  },

  Bolt: {
    partIcon: bolt,
    partPrice: 1,
    levelNeeded: 1
  },

  Pipe: {
    partIcon: pipe,
    partPrice: 1,
    levelNeeded: 1
  }
}


// EXPORT


export default parts;