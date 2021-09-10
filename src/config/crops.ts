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


export interface Crop {
  [key: string]: CropData 
}

export interface CropData {
  cropIcon: string;
  timeToGrowInSeconds: number;
  groundRateNeeded: number;
  waterRateNeeded: number;
  defaultYield: number;
  expPerUnit: number;
}

export interface OldCrop {
  cropName: string;
  cropIcon: string;
  timeToGrowInSeconds: number;
  groundRateNeeded: number;
  waterRateNeeded: number;
  defaultYield: number;
  expPerUnit: number;
}


const makeArrayFromCrops = () => {
  const newArray = [];
  const objectKeys = Object.keys(crops);
  for (let i = 0; i < objectKeys.length; i++) {
    let newArrayItem: OldCrop = { 
      cropName: objectKeys[i], 
      cropIcon: crops[objectKeys[i]].cropIcon,
      timeToGrowInSeconds: crops[objectKeys[i]].timeToGrowInSeconds,
      groundRateNeeded: crops[objectKeys[i]].groundRateNeeded,
      waterRateNeeded: crops[objectKeys[i]].waterRateNeeded,
      defaultYield: crops[objectKeys[i]].defaultYield,
      expPerUnit: crops[objectKeys[i]].expPerUnit
    }
    newArray.push(newArrayItem);
  }
  return newArray;
}


export const crops: Crop = {
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

export const cropsArray = makeArrayFromCrops();