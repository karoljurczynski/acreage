import { Wrapper, Block, CropIcon, CropAmount } from './StorageContentStyles';
import { storedCropsPattern } from '../../config/cropList';

interface StorageContentProps {
  storedCrops: storedCropsPattern[]; 
}

const StorageContent: React.FC<StorageContentProps> = ({ storedCrops }) => {
  return (
    <Wrapper>
      { storedCrops.map(crop => {
        return (
          <Block>
            <CropIcon src={ crop.icon }/>
            <CropAmount>{ crop.amount }x</CropAmount>
          </Block>
        )
      })}
    </Wrapper>
  )
}

export default StorageContent;