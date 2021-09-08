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
    timeToGrowInSeconds: 2,
    groundRateNeeded: 2,
    waterRateMin: 2,
    waterRateMax: 5,
    defaultYield: 3,
    expPerUnit: 0.5 
  },
  {
    cropName: "Grass",
    cropIcon: grass,
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
    timeToGrowInSeconds: 0,
    groundRateNeeded: 0,
    waterRateMin: 0,
    waterRateMax: 0,
    defaultYield: 0,
    expPerUnit: 0 
  }
]