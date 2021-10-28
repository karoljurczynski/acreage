export const setIsLogged = () => {
  return {
    type: "SET_IS_LOGGED"
  }
}
export const setUsername = (newUsername: string) => {
  return {
    type: "SET_USERNAME",
    newUsername: newUsername
  }
}
export const setPassword = (newPassword: string) => {
  return {
    type: "SET_PASSWORD",
    newPassword: newPassword
  }
}
export const setEmail = (newEmail: string) => {
  return {
    type: "SET_EMAIL",
    newEmail: newEmail
  }
}
export const setAvatar = (newAvatarUrl: string) => {
  return {
    type: "SET_AVATAR",
    newAvatarUrl: newAvatarUrl
  }
}
export const setUserMoney = (newUserMoney: number) => {
  return {
    type: "SET_USER_MONEY",
    newUserMoney: newUserMoney
  }
}
export const setUserExperience = (newUserExperience: number) => {
  return {
    type: "SET_USER_EXPERIENCE",
    newUserExperience: newUserExperience
  }
}
export const setUserLevel = (newUserLevel: number) => {
  return {
    type: "SET_USER_LEVEL",
    newUserLevel: newUserLevel
  }
}
export const setBuildingLevel = (buildingName: string, newBuildingLevel: number) => {
  return {
    type: "SET_BUILDING_LEVEL",
    buildingName: buildingName,
    newBuildingLevel: newBuildingLevel
  }
}
export const setBuildingSize = (buildingName: string, newBuildingSize: number) => {
  return {
    type: "SET_BUILDING_SIZE",
    buildingName: buildingName,
    newBuildingSize: newBuildingSize
  }
}
export const setBuildingSpeed = (buildingName: string, newBuildingSpeed: number) => {
  return {
    type: "SET_BUILDING_SPEED",
    buildingName: buildingName,
    newBuildingSpeed: newBuildingSpeed
  }
}
export const setCropLevel = (cropName: string, newCropLevel: number) => {
  return {
    type: "SET_CROP_LEVEL",
    cropName: cropName,
    newCropLevel: newCropLevel
  }
}
export const setCropCurrentXp = (cropName: string, newCropCurrentXp: number) => {
  return {
    type: "SET_CROP_CURRENT_XP",
    cropName: cropName,
    newCropCurrentXp: newCropCurrentXp
  }
}