import { Wrapper, Heading, Subheading } from './StorageHeadingStyles';
import { useState } from 'react';

import { State } from '../../redux/reduxStore';
import { StorageItem } from '../../redux/reducers/storageReducer'; 
import { useSelector } from 'react-redux';

const StorageHeading: React.FC = () => {
  const state: State = useSelector(state => state) as State;
  const storage: StorageItem[] = state.storage;


  const [storageArray, setStorageArray] = useState(storage);
  const countStorageItems = () => {
    let sum: number = 0;
    storageArray.forEach(item => {
      sum += item.amount;
    })
    return sum;
  }
  return (
    <Wrapper>
      <Heading>Storage</Heading>
      <Subheading>{ countStorageItems() } / 100</Subheading>
    </Wrapper>
  )
}

export default StorageHeading;