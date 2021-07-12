import logo from '../images/logo.png';

export interface storedCropsPattern {
  icon: string;
  amount: number;
}

export const storedCrops: storedCropsPattern[] = [
  { icon: logo, amount: 7 },
  { icon: logo, amount: 15 },
  { icon: logo, amount: 12 }
];