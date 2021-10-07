// INTERFACES


export interface CropInterface {
  [key: string]: CropDataInterface 
}
export interface CropDataInterface {
  cropLevel: number;
  cropIcon: string;
  timeToGrowInSeconds: number;
  groundRateNeeded: number;
  waterRateNeeded: number;
  defaultYield: number;
  xpPerUnit: number;
  currentCropXp: number;
  cropXpPerHarvest: number;
  levelNeeded: number;
}