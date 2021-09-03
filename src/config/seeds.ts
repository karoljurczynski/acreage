import wheat from '../images/crops/wheat.png';
import potato from '../images/crops/potato.png';
import tomato from '../images/crops/tomato.png';

export interface Seed {
  seedName: string;
  seedIcon: string;
  seedPrice: number;
}

export const seeds: Seed[] = [
  {
    seedName: "Wheat",
    seedIcon: wheat,
    seedPrice: 1
  },
  {
    seedName: "Potato",
    seedIcon: potato,
    seedPrice: 1
  },
  {
    seedName: "Tomato",
    seedIcon: tomato,
    seedPrice: 1
  }
]