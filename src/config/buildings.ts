import farmhouse from '../images/buildings/farmhouse.png';
import barn from '../images/buildings/barn.png';
import chicken from '../images/buildings/chicken.png';
import cow from '../images/buildings/cow.png';


export interface Building {
  buildingName: string;
  buildingIcon: string;
  buildingLevel: number;
  buildingComponents: BuildingPart[];
}

export interface BuildingPart {
  [key: string]: number;
}

export const buildings: Building[] = [
  {
    buildingName: "Farmhouse",
    buildingIcon: farmhouse,
    buildingLevel: 1,
    buildingComponents: [{ brick: 3, concrete: 1 }]
  },
  {
    buildingName: "Barn",
    buildingIcon: barn,
    buildingLevel: 1,
    buildingComponents: [{ brick: 3, concrete: 1 }]
  },
  {
    buildingName: "Chickens",
    buildingIcon: chicken,
    buildingLevel: 1,
    buildingComponents: [{ brick: 3, concrete: 1 }]
  },
  {
    buildingName: "Cows",
    buildingIcon: cow,
    buildingLevel: 1,
    buildingComponents: [{ brick: 3, concrete: 1 }]
  }
]