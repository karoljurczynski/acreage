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
  cropName: string;
  cropIcon: string;
  levelNeeded: number;
  timeToGrowInSeconds: number;
  groundRateNeeded: number;
  waterRateMin: number;
  waterRateMax: number;
  defaultYield: number;
  expPerUnit: number;
}

export const crops: Crop[] = [
  {
    cropName: "Wheat",
    cropIcon: wheat,
    levelNeeded: 1,
    timeToGrowInSeconds: 1,
    groundRateNeeded: 1,
    waterRateMin: 1,
    waterRateMax: 3,
    defaultYield: 1,
    expPerUnit: 0.5
  },
  {
    cropName: "Potato",
    cropIcon: potato,
    levelNeeded: 2,
    timeToGrowInSeconds: 3,
    groundRateNeeded: 2,
    waterRateMin: 1,
    waterRateMax: 4,
    defaultYield: 1,
    expPerUnit: 1 
  },
  {
    cropName: "Tomato",
    cropIcon: tomato,
    levelNeeded: 3,
    timeToGrowInSeconds: 2,
    groundRateNeeded: 2,
    waterRateMin: 2,
    waterRateMax: 5,
    defaultYield: 3,
    expPerUnit: 0.5 
  },
  {
    cropName: "Wheat",
    cropIcon: wheat,
    levelNeeded: 1,
    timeToGrowInSeconds: 1,
    groundRateNeeded: 1,
    waterRateMin: 1,
    waterRateMax: 3,
    defaultYield: 1,
    expPerUnit: 0.5
  },
  {
    cropName: "Grass",
    cropIcon: grass,
    levelNeeded: 0,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateMin: 0,
    waterRateMax: 0,
    defaultYield: 0,
    expPerUnit: 0 
  },
  {
    cropName: "Cabbage",
    cropIcon: cabbage,
    levelNeeded: 0,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateMin: 0,
    waterRateMax: 0,
    defaultYield: 0,
    expPerUnit: 0  
  },
  {
    cropName: "Beet",
    cropIcon: beet,
    levelNeeded: 0,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateMin: 0,
    waterRateMax: 0,
    defaultYield: 0,
    expPerUnit: 0 
  },
  {
    cropName: "Carrot",
    cropIcon: carrot,
    levelNeeded: 0,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateMin: 0,
    waterRateMax: 0,
    defaultYield: 0,
    expPerUnit: 0 
  },
  {
    cropName: "Corn",
    cropIcon: corn,
    levelNeeded: 0,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateMin: 0,
    waterRateMax: 0,
    defaultYield: 0,
    expPerUnit: 0 
  },
  {
    cropName: "Strawberry",
    cropIcon: strawberry,
    levelNeeded: 0,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateMin: 0,
    waterRateMax: 0,
    defaultYield: 0,
    expPerUnit: 0 
  },
  {
    cropName: "Onion",
    cropIcon: onion,
    levelNeeded: 0,
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateMin: 0,
    waterRateMax: 0,
    defaultYield: 0,
    expPerUnit: 0 
  }
]