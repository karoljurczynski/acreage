// IMPORTS


import { Wrapper, Heading, Subheading } from './StorageHeadingStyles';

import { useSelector } from 'react-redux';
import { StateInterface } from '../../redux/reduxStore';
import { UserInterface } from '../../redux/reducers/userReducer';
import { StorageItem } from '../../redux/reducers/storageReducer'; 


// COMPONENT


const StorageHeading: React.FC = () => {


  // STATE


  const state: StateInterface = useSelector((state: StateInterface): StateInterface => state);
  const userData: UserInterface = state.userData;
  const storage: StorageItem[] = state.storage;


  // TOOL FUNCTION


  const countStorageItems = (): number => {
    let sum: number = 0;
    storage.forEach(item => {
      sum += item.amount;
    });
    // storage.reduce((previousItem, currentItem) => {
    //   return previousItem.amount + currentItem.amount;
    // });
    return sum;
  }
  return (
    <Wrapper>
      <Heading>Storage</Heading>
      <Subheading>{`${countStorageItems()} / ${userData.gameplay.storageCapacity}`}</Subheading>
    </Wrapper>
  )
}

export default StorageHeading;