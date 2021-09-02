export const setFieldMenuOpened = (fieldId: number) => {
  return {
    type: "SET_IS_FIELD_MENU_OPENED",
    fieldId: fieldId
  }
}
export const setIsFieldBought = (fieldId: number) => {
  return {
    type: "SET_IS_FIELD_BOUGHT",
    fieldId: fieldId
  }
}
export const setCropType = (fieldId: number, cropType: string) => {
  return {
    type: "SET_CROP_TYPE",
    fieldId: fieldId,
    cropType: cropType
  }
}