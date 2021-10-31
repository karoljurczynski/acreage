// IMPORTS


import { BuildingInterface } from './interfaces';

import farmhouse from '../images/buildings/farmhouse.png';
import barn from '../images/buildings/barn.png';
import well from '../images/buildings/well.png';
import chicken from '../images/buildings/chicken.png';
import cow from '../images/buildings/cow.png';
import pig from '../images/buildings/pig.png';


// DATA


const buildings: BuildingInterface = {
  Farmhouse: {
    buildingLevel: 1,
    buildingIcon: farmhouse,
    levelNeeded: 1,
    timeToBuildInSeconds: 60,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    xpPerUpgrade: 2,
    partsNeeded: [{name: "Brick", amount: 3}, {name: "Plank", amount: 2}, {name: "Bolt", amount: 2}]
  },

  Barn: {
    buildingLevel: 1,
    buildingIcon: barn,
    levelNeeded: 1,
    timeToBuildInSeconds: 60,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    xpPerUpgrade: 2,
    partsNeeded: [{name: "Brick", amount: 3}, {name: "Plank", amount: 2}, {name: "Bolt", amount: 2}]
  },

  Well: {
    buildingLevel: 1,
    buildingIcon: well,
    levelNeeded: 1,
    timeToBuildInSeconds: 60,
    groundRateNeeded: 0,
    waterRateNeeded: 1,
    xpPerUpgrade: 2,
    partsNeeded: [{name: "Brick", amount: 3}, {name: "Plank", amount: 2}, {name: "Pipe", amount: 2}]
  },

  Chickens: {
    buildingLevel: 1,
    buildingIcon: chicken,
    levelNeeded: 3,
    timeToBuildInSeconds: 60,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    xpPerUpgrade: 2,
    partsNeeded: [{name: "Brick", amount: 3}, {name: "Plank", amount: 2}, {name: "Bolt", amount: 2}]
  },

  Cows: {
    buildingLevel: 1,
    buildingIcon: cow,
    levelNeeded: 3,
    timeToBuildInSeconds: 60,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    xpPerUpgrade: 2,
    partsNeeded: [{name: "Brick", amount: 3}, {name: "Plank", amount: 2}, {name: "Bolt", amount: 2}]
  },

  Pigs: {
    buildingLevel: 1,
    buildingIcon: pig,
    levelNeeded: 3,
    timeToBuildInSeconds: 60,
    groundRateNeeded: 0,
    waterRateNeeded: 0,
    xpPerUpgrade: 2,
    partsNeeded: [{name: "Brick", amount: 3}, {name: "Plank", amount: 2}, {name: "Bolt", amount: 2}]
  }
};
  

// EXPORT


export default buildings;