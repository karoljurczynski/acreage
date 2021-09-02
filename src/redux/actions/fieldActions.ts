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
export const setBuildingType = (fieldId: number, buildingType: string) => {
  return {
    type: "SET_BUILDING_TYPE",
    fieldId: fieldId,
    buildingType: buildingType
  }
}
export const setIsCropReadyToHarvest = (fieldId: number) => {
  return {
    type: "SET_IS_CROP_READY_TO_HARVEST",
    fieldId: fieldId
  }
}
export const updateTimeToGrow = (fieldId: number, newTimeInSeconds: number) => {
  return {
    type: "UPDATE_TIME_TO_GROW",
    fieldId: fieldId,
    newTimeInSeconds: newTimeInSeconds
  }

}
export const setIsCropWatered = (fieldId: number) => {
  return {
    type: "SET_IS_CROP_WATERED",
    fieldId: fieldId
  }
}
export const setIsCropFertilized = (fieldId: number) => {
  return {
    type: "SET_IS_CROP_FERTILIZED",
    fieldId: fieldId
  }
}