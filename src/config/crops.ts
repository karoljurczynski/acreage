// IMPORTS


import { CropInterface } from './interfaces';

import wheat from '../images/crops/wheat.png';
import potato from '../images/crops/potato.png';
import tomato from '../images/crops/tomato.png';
import grass from '../images/crops/grass.png';
import cabbage from '../images/crops/cabbage.png';
import beet from '../images/crops/beet.png';
import carrot from '../images/crops/carrot.png';
import corn from '../images/crops/corn.png';
import strawberry from '../images/crops/strawberry.png';
import onion from '../images/crops/onion.png';


// DATA


const crops: CropInterface = {
  Wheat: {
    cropIcon: wheat,
    timeToGrowInSeconds: 1,
    groundRateNeeded: 1,
    waterRateNeeded: 3,
    defaultYield: 1,
    expPerUnit: 0.5
  },

  Potato: {
    cropIcon: potato,
    timeToGrowInSeconds: 1,
    groundRateNeeded: 1,
    waterRateNeeded: 3,
    defaultYield: 1,
    expPerUnit: 1
  },

  Tomato: {
    cropIcon: tomato,
    timeToGrowInSeconds: 2,
    groundRateNeeded: 2,
    waterRateNeeded: 5,
    defaultYield: 3,
    expPerUnit: 0.5 
  },

  Grass: {
    cropIcon: grass,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 0,
    expPerUnit: 0
  },

  Cabbage: {
    cropIcon: cabbage,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 0,
    expPerUnit: 0
  },

  Beet: {
    cropIcon: beet,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 0,
    expPerUnit: 0
  },

  Carrot: {
    cropIcon: carrot,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 0,
    expPerUnit: 0
  },

  Corn: {
    cropIcon: corn,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 0,
    expPerUnit: 0
  },

  Strawberry: {
    cropIcon: strawberry,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 0,
    expPerUnit: 0
  },

  Onion: {
    cropIcon: onion,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 0,
    expPerUnit: 0
  }
}


// EXPORT


export default crops;