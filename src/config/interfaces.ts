// INTERFACES


export interface CropInterface {
  [key: string]: CropDataInterface 
}
export interface CropDataInterface {
  cropLevel: number;
  cropIcon: string;
  currentCropXp: number;
  levelNeeded: number;
  timeToGrowInSeconds: number;
  groundRateNeeded: number;
  waterRateNeeded: number;
  defaultYield: number;
  xpPerUnit: number;
  cropXpPerHarvest: number;
  seedPrice: number;
}

export interface BuildingInterface {
  [key: string]: BuildingDataInterface 
}
export interface BuildingDataInterface {
  buildingLevel: number;
  buildingIcon: string;
  levelNeeded: number;
  timeToBuildInSeconds: number,
  groundRateNeeded: number;
  waterRateNeeded: number;
  xpPerUpgrade: number,
  partsNeeded: BuildingPart[];
}
export interface BuildingPart {
  name: string;
  amount: number;
}

export interface PartInterface {
  [key: string]: PartDataInterface 
}
export interface PartDataInterface {
  partIcon: string;
  partPrice: number;
  levelNeeded: number;
}

export interface SeedInterface {
  [key: string]: SeedDataInterface 
}
export interface SeedDataInterface {
  seedIcon: string;
  seedPrice: number;
  levelNeeded: number
}