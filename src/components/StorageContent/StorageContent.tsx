// IMPORTS


import { Wrapper, Block, CropIcon, CropAmount } from './StorageContentStyles';
import { StorageContentPropsInterface } from '../interfaces';
import crops from '../../config/crops';
import seeds  from '../../config/seeds';
import buildings from '../../config/buildings';
import parts from '../../config/parts';

import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { StorageItem } from '../../redux/reducers/storageReducer'; 


// COMPONENT


const StorageContent: React.FC<StorageContentPropsInterface> = () => {


  // STATE


  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const storage: StorageItem[] = state.storage;


  // TOOL FUNCTIONS

  
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
        return seeds[name].seedIcon;
      }
      case "Part": {
        return parts[name].partIcon;
      }
    }
    return icon;
  }


  // JSX


  return (
    <Wrapper>
      { storage.map(item => {
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


// EXPORT


export default StorageContent;