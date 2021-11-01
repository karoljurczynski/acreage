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
export const setPlantedTime = (fieldId: number, newTimeInSeconds: number) => {
  return {
    type: "SET_PLANTED_TIME",
    fieldId: fieldId,
    newTimeInSeconds: newTimeInSeconds
  }
}
export const setIsCropReadyToHarvest = (fieldId: number, isReadyToHarvest: boolean) => {
  return {
    type: "SET_IS_CROP_READY_TO_HARVEST",
    fieldId: fieldId,
    isReadyToHarvest: isReadyToHarvest
  }
}
export const setIsCropWatered = (fieldId: number, isWatered: boolean) => {
  return {
    type: "SET_IS_CROP_WATERED",
    fieldId: fieldId,
    isWatered: isWatered
  }
}
export const setIsCropFertilized = (fieldId: number, isFertilized: boolean) => {
  return {
    type: "SET_IS_CROP_FERTILIZED",
    fieldId: fieldId,
    isFertilized: isFertilized
  }
}


export const setAnimalType = (fieldId: number, newAnimalType: string) => {
  return {
    type: "SET_ANIMAL_TYPE",
    fieldId: fieldId,
    newAnimalType: newAnimalType
  }
}
export const setAnimalAmount = (fieldId: number, newAnimalAmount: number) => {
  return {
    type: "SET_ANIMAL_AMOUNT",
    fieldId: fieldId,
    newAnimalAmount: newAnimalAmount
  }
}
export const setProductionStartedTime = (fieldId: number, newTimeInSeconds: number) => {
  return {
    type: "SET_PRODUCTION_STARTED_TIME",
    fieldId: fieldId,
    newTimeInSeconds: newTimeInSeconds
  }
}
export const setIsAnimalReadyToCollect = (fieldId: number, isReadyToCollect: boolean) => {
  return {
    type: "SET_IS_ANIMAL_READY_TO_COLLECT",
    fieldId: fieldId,
    isReadyToCollect: isReadyToCollect
  }
}
export const setIsAnimalFed = (fieldId: number, isFed: boolean) => {
  return {
    type: "SET_IS_ANIMAL_FED",
    fieldId: fieldId,
    isFed: isFed
  }
}
export const setIsAnimalCleaned = (fieldId: number, isCleaned: boolean) => {
  return {
    type: "SET_IS_ANIMAL_CLEANED",
    fieldId: fieldId,
    isCleaned: isCleaned
  }
}


export const setBuildingType = (fieldId: number, newBuildingType: string) => {
  return {
    type: "SET_BUILDING_TYPE",
    fieldId: fieldId,
    newBuildingType: newBuildingType
  }
}
export const setBuildStartedTime = (fieldId: number, newTimeInSeconds: number) => {
  return {
    type: "SET_BUILD_STARTED_TIME",
    fieldId: fieldId,
    newTimeInSeconds: newTimeInSeconds
  }
}
export const setIsBuildReady = (fieldId: number, isBuildReady: boolean) => {
  return {
    type: "SET_IS_BUILD_READY",
    fieldId: fieldId,
    isBuildReady: isBuildReady
  }
}