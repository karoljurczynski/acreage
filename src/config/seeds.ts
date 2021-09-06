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
  },
  {
    seedName: "Grass",
    seedIcon: grass,
    seedPrice: 1
  },
  {
    seedName: "Cabbage",
    seedIcon: cabbage,
    seedPrice: 1
  },
  {
    seedName: "Beet",
    seedIcon: beet,
    seedPrice: 1
  },
  {
    seedName: "Carrot",
    seedIcon: carrot,
    seedPrice: 1
  },
  {
    seedName: "Corn",
    seedIcon: corn,
    seedPrice: 1
  },
  {
    seedName: "Strawberry",
    seedIcon: strawberry,
    seedPrice: 1
  },
  {
    seedName: "Onion",
    seedIcon: onion,
    seedPrice: 1
  }
]