import { Wrapper, Block, CropIcon, CropAmount } from './StorageContentStyles';
import { useState } from 'react';
import { StateInterface } from '../../redux/reduxStore';
import { StorageItem } from '../../redux/reducers/storageReducer'; 
import { useSelector } from 'react-redux';
import crops from '../../config/crops';
import buildings from '../../config/buildings';
import { seeds } from '../../config/seeds';
import parts from '../../config/parts';

const StorageContent: React.FC = () => {
  const state: StateInterface = useSelector(state => state) as StateInterface;
  const storage: StorageItem[] = state.storage;

  const [storageArray, setStorageArray] = useState(storage);

  const getIcon = (name: string, type: string): string => {
    let icon: string = "";
    switch (type) {
      case "Crop": {
        return crops[name].cropIcon;
      }
      case "Blueprint": {
        return buildings[name].buildingIcon;
      }
      case "Seed": {
        seeds.forEach(seed => {
          if (seed.seedName === name)
            icon = seed.seedIcon;
        });
        break;
      }
      case "Part": {
        return parts[name].partIcon;
      }
    }
    return icon;
  }

  return (
    <Wrapper>
      { storageArray.map(item => {
        return (
          <Block title={`${item.type} - ${item.name}`} itemType={ item.type }>
            <CropIcon src={ getIcon(item.name, item.type) }/>
            <CropAmount>{ item.amount }x</CropAmount>
          </Block>
        )
      })}
    </Wrapper>
  )
}

export default StorageContent;