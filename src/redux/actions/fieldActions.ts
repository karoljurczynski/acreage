export const setIsFieldBought = (fieldId: number) => {
  return {
    type: "SET_IS_FIELD_BOUGHT",
    fieldId: fieldId
  }
}
export const setFieldName = (fieldId: number, newFieldName: string) => {
  return {
    type: "SET_FIELD_NAME",
    fieldId: fieldId,
    newFieldName: newFieldName
  }
}
export const setCropType = (fieldId: number, newCropType: string) => {
  return {
    type: "SET_CROP_TYPE",
    fieldId: fieldId,
    newCropType: newCropType
  }
}
export const setCropIcon = (fieldId: number, newIcon: string) => {
  return {
    type: "SET_CROP_ICON",
    fieldId: fieldId,
    newIcon: newIcon
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
export const setBuildingType = (fieldId: number, newBuildingType: string) => {
  return {
    type: "SET_BUILDING_TYPE",
    fieldId: fieldId,
    newBuildingType: newBuildingType
  }
}
export const setBuildingIcon = (fieldId: number, newIcon: string) => {
  return {
    type: "SET_BUILDING_ICON",
    fieldId: fieldId,
    newIcon: newIcon
  }
}
export const setBuildingLevel = (fieldId: number, newLevel: number) => {
  return {
    type: "SET_BUILDING_LEVEL",
    fieldId: fieldId,
    newLevel: newLevel
  }
}
export const setIsUpgradeReady = (fieldId: number) => {
  return {
    type: "SET_IS_UPGRADE_READY",
    fieldId: fieldId,
  }
}
export const setBuildingCapacity = (fieldId: number, newCapacity: number) => {
  return {
    type: "SET_BUILDING_CAPACITY",
    fieldId: fieldId,
    newCapacity: newCapacity
  }
}