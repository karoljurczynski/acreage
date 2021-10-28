// INTERFACES


export interface StorageItem {
  name: string;
  amount: number;
  type: "Crop" | "Seed" | "Part" | "Blueprint";
  selected?: boolean;
}


// INITIAL STATE


const initialState: StorageItem[] = [
  { name: "Wheat", amount: 6, type: "Crop" },
  { name: "Tomato", amount: 2, type: "Crop" },
  { name: "Wheat", amount: 3, type: "Seed" },
  { name: "Bolt", amount: 3, type: "Part" },
  { name: "Pipe", amount: 5, type: "Part" },
  { name: "Brick", amount: 5, type: "Part" },
  { name: "Plank", amount: 5, type: "Part" },
  { name: "Water", amount: 1, type: "Part" },
  { name: "Fertilizer", amount: 1, type: "Part" },
  { name: "Well", amount: 1, type: "Blueprint" }
]


// REDUCER


export const storageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_USER_STORAGE": {
      let newItemExistInStorage = false;
      const newState = [...state];
      const newItem: StorageItem = { name: action.newItemName, amount: action.newItemAmount, type: action.newItemType };
      
      state.forEach((item, index) => {
        if (item.name === newItem.name) {
          if (item.type === newItem.type) {
            newState[index].amount += newItem.amount;
            newItemExistInStorage = true;
          }
        } 
      });
      
      if (!newItemExistInStorage)
        newState.unshift(newItem);
      
      return newState;
    }
    case "REMOVE_FROM_USER_STORAGE": {
      const newState = [...state];
      const removedItem: StorageItem = { name: action.removedItemName, amount: action.removedItemAmount, type: action.removedItemType };
      
      state.forEach((item, index) => {
        if (item.name === removedItem.name) {
          if (item.type === removedItem.type) {
            if (item.amount === removedItem.amount)
              newState.splice(index, 1);
            else
              newState[index].amount -= removedItem.amount;
          }
        } 
      });

      return newState;
    }
    default: return [...state];
  }
}