// INTERFACES


export interface CropInterface {
  [key: string]: CropDataInterface 
}
export interface CropDataInterface {
  cropIcon: string;
  timeToGrowInSeconds: number;
  groundRateNeeded: number;
  waterRateNeeded: number;
  defaultYield: number;
  expPerUnit: number;
}