export const addToUserStorage = (newItemName: string, newItemAmount: number, newItemType: string) => {
  return {
    type: "ADD_TO_USER_STORAGE",
    newItemName: newItemName,
    newItemAmount: newItemAmount,
    newItemType: newItemType
  }
}
export const removeFromUserStorage = (removedItemName: string, removedItemAmount: number, removedItemType: string) => {
  return {
    type: "REMOVE_FROM_USER_STORAGE",
    removedItemName: removedItemName,
    removedItemAmount: removedItemAmount,
    removedItemType: removedItemType
  }
}