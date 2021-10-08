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
    cropLevel: 1,
    cropIcon: wheat,
    timeToGrowInSeconds: 60,
    groundRateNeeded: 1,
    waterRateNeeded: 1,
    defaultYield: 1,
    xpPerUnit: 1,
    levelNeeded: 1,
    currentCropXp: 15,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Potato: {
    cropLevel: 1,
    cropIcon: potato,
    timeToGrowInSeconds: 180,
    groundRateNeeded: 2,
    waterRateNeeded: 2,
    defaultYield: 2,
    xpPerUnit: 2,
    levelNeeded: 1,
    currentCropXp: 5,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Tomato: {
    cropLevel: 2,
    cropIcon: tomato,
    timeToGrowInSeconds: 90,
    groundRateNeeded: 3,
    waterRateNeeded: 2,
    defaultYield: 3,
    xpPerUnit: 1,
    levelNeeded: 2,
    currentCropXp: 36,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Grass: {
    cropLevel: 1,
    cropIcon: grass,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 1,
    xpPerUnit: 0,
    levelNeeded: 2,
    currentCropXp: 10,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Cabbage: {
    cropLevel: 1,
    cropIcon: cabbage,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 1,
    xpPerUnit: 0,
    levelNeeded: 2,
    currentCropXp: 10,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Beet: {
    cropLevel: 1,
    cropIcon: beet,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 1,
    xpPerUnit: 0,
    levelNeeded: 2,
    currentCropXp: 10,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Carrot: {
    cropLevel: 1,
    cropIcon: carrot,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 1,
    xpPerUnit: 0,
    levelNeeded: 2,
    currentCropXp: 10,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Corn: {
    cropLevel: 1,
    cropIcon: corn,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 1,
    xpPerUnit: 0,
    levelNeeded: 2,
    currentCropXp: 10,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Strawberry: {
    cropLevel: 1,
    cropIcon: strawberry,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 1,
    xpPerUnit: 0,
    levelNeeded: 2,
    currentCropXp: 10,
    cropXpPerHarvest: 2,
    seedPrice: 2
  },

  Onion: {
    cropLevel: 1,
    cropIcon: onion,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    defaultYield: 1,
    xpPerUnit: 0,
    levelNeeded: 2,
    currentCropXp: 10,
    cropXpPerHarvest: 2,
    seedPrice: 2
  }
};


// EXPORT


export default crops;