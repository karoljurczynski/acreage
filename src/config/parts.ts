import wheat from '../images/crops/wheat.png';
import potato from '../images/crops/potato.png';
import tomato from '../images/crops/tomato.png';

export interface Part {
  partName: string;
  partIcon: string;
  partPrice: number;
}

export const parts: Part[] = [
  {
    partName: "Wheat",
    partIcon: wheat,
    partPrice: 1
  },
  {
    partName: "Potato",
    partIcon: potato,
    partPrice: 1
  },
  {
    partName: "Tomato",
    partIcon: tomato,
    partPrice: 1
  }
]