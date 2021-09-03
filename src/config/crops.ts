import wheat from '../images/crops/wheat.png';
import potato from '../images/crops/potato.png';
import tomato from '../images/crops/tomato.png';

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
  }
]