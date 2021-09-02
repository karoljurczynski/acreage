// INTERFACES


export interface StorageItem {
  name: string;
  amount: number;
}


// INITIAL STATE


const initialState: StorageItem[] = [
  { name: "", amount: 0 }
]


// REDUCER


export const storageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_USER_STORAGE": {
      let newItemExistInStorage = false;
      const newState = state;
      const newItem: StorageItem = { name: action.newItemName, amount: action.newItemAmount };
      
      state.forEach((item, index) => {
        if (item.name === newItem.name) {
          newState[index].amount += newItem.amount;
          newItemExistInStorage = true;
        } 
      });
      
      if (!newItemExistInStorage)
        newState.unshift(newItem);
      
      return newState;
    }
    case "REMOVE_FROM_USER_STORAGE": {
      const newState = state;
      const removedItem: StorageItem = { name: action.removedItemName, amount: action.removedItemAmount };
      
      state.forEach((item, index) => {
        if (item.name === removedItem.name) {
          if (item.amount === removedItem.amount)
            newState.splice(index, 1);
          else
            newState[index].amount -= removedItem.amount;
        } 
      });

      return newState;
    }
    default: return state;
  }
}