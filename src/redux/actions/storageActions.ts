export const addToUserStorage = (newItemName: string, newItemAmount: number) => {
  return {
    type: "ADD_TO_USER_STORAGE",
    newItemName: newItemName,
    newItemAmount: newItemAmount
  }
}
export const removeFromUserStorage = (removedItemName: string, removedItemAmount: number) => {
  return {
    type: "REMOVE_FROM_USER_STORAGE",
    removedItemName: removedItemName,
    removedItemAmount: removedItemAmount
  }
}