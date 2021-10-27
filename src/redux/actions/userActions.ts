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
export const setBarnSize = (newBarnSize: number) => {
  return {
    type: "SET_BARN_SIZE",
    newBarnSize: newBarnSize
  }
}
export const setWellSpeed = (newWellSpeed: number) => {
  return {
    type: "SET_WELL_PUMP_SPEED",
    newWellSpeed: newWellSpeed
  }
}
export const setChickenSize = (newChickenSize: number) => {
  return {
    type: "SET_CHICKEN_SIZE",
    newChickenSize: newChickenSize
  }
}
export const setCowSize = (newCowSize: number) => {
  return {
    type: "SET_COW_SIZE",
    newCowSize: newCowSize
  }
}