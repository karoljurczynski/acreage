import water from '../images/parts/water.png';
import fertilizer from '../images/parts/fertilizer.png';
import plank from '../images/parts/plank.png';
import brick from '../images/parts/brick.png';
import bolt from '../images/parts/bolt.png';
import pipe from '../images/parts/pipe.png';


export interface Part {
  partName: string;
  partIcon: string;
  partPrice: number;
  levelNeeded: number;
}


export const parts: Part[] = [
  {
    partName: "Water",
    partIcon: water,
    partPrice: 1,
    levelNeeded: 1
  },
  {
    partName: "Fertilizer",
    partIcon: fertilizer,
    partPrice: 1,
    levelNeeded: 1
  },
  {
    partName: "Plank",
    partIcon: plank,
    partPrice: 1,
    levelNeeded: 1
  },
  {
    partName: "Brick",
    partIcon: brick,
    partPrice: 1,
    levelNeeded: 1
  },
  {
    partName: "Bolt",
    partIcon: bolt,
    partPrice: 1,
    levelNeeded: 1
  },
  {
    partName: "Pipe",
    partIcon: pipe,
    partPrice: 1,
    levelNeeded: 1
  }
]