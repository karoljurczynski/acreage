import wheat from '../images/crops/wheat.png';
import potato from '../images/crops/potato.png';
import tomato from '../images/crops/tomato.png';

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
    buildingIcon: wheat,
    buildingLevel: 1,
    buildingComponents: [{ brick: 3, concrete: 1 }]
  },
  {
    buildingName: "Barn",
    buildingIcon: potato,
    buildingLevel: 1,
    buildingComponents: [{ brick: 3, concrete: 1 }]
  }
]