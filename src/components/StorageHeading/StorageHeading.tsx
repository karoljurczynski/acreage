import { Wrapper, Heading, Subheading } from './StorageHeadingStyles';
import { storedCropsPattern } from '../../config/cropList';

interface StorageHeadingProps {
  storedCrops: storedCropsPattern[]; 
}

const StorageHeading: React.FC<StorageHeadingProps> = ({ storedCrops }) => {
  const countCropsTotalAmount = (storedCrops: storedCropsPattern[]): number => {
    let sum: number = 0;
    storedCrops.forEach(crop => sum += crop.amount);
    return sum;
  }

  return (
    <Wrapper>
      <Heading>Storage</Heading>
      <Subheading>{ countCropsTotalAmount(storedCrops) } / 100</Subheading>
    </Wrapper>
  )
}

export default StorageHeading;