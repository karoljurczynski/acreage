// INTERFACES


export interface UserInterface {
  settings: Settings;
  gameplay: Gameplay;
}
export interface Gameplay {
  userMoney: number;
  userExperience: number;
  userLevel: number;
  cropsLevels: CropsLevels,
  buildingsLevels: BuildingsLevels
}
export interface Settings {
  isLogged: boolean;
  username: string;
  password: string;
  email: string;
  avatarUrl: string;
}
export interface CropsLevels {
  [key: string]: CropLevel;
}
export interface CropLevel {
  cropLevel: number,
  currentCropXp: number
}
export interface BuildingsLevels {
  [key: string]: BuildingLevel;
}
export interface BuildingLevel {
  buildingLevel: number,
  timeToUpgradeInSeconds: number,
  buildingSize: number,
  buildingSpeed: number
}


// INITIAL STATE


const initialState: UserInterface = {
  settings: {
    isLogged: true,
    username: "Default",
    password: "123",
    email: "default@email.com",
    avatarUrl: ""
  },
  gameplay: {
    userMoney: 10000,
    userExperience: 0,
    userLevel: 2,
    cropsLevels: {
      Wheat: {
        cropLevel: 1,
        currentCropXp: 0
      },

      Potato: {
        cropLevel: 1,
        currentCropXp: 0
      },
    
      Tomato: {
        cropLevel: 1,
        currentCropXp: 0
      },
    
      Grass: {
        cropLevel: 1,
        currentCropXp: 0
      },
    
      Cabbage: {
        cropLevel: 1,
        currentCropXp: 0
      },
    
      Beet: {
        cropLevel: 1,
        currentCropXp: 0
      },
    
      Carrot: {
        cropLevel: 1,
        currentCropXp: 0
      },
    
      Corn: {
        cropLevel: 1,
        currentCropXp: 0
      },
    
      Strawberry: {
        cropLevel: 1,
        currentCropXp: 0
      },
    
      Onion: {
        cropLevel: 1,
        currentCropXp: 0
      }
    },
    buildingsLevels: {
      Farmhouse: {
        buildingLevel: 1,
        timeToUpgradeInSeconds: 120,
        buildingSize: 0,
        buildingSpeed: 0
      },
    
      Barn: {
        buildingLevel: 1,
        timeToUpgradeInSeconds: 120,
        buildingSize: 30,
        buildingSpeed: 0
      },
    
      Well: {
        buildingLevel: 1,
        timeToUpgradeInSeconds: 120,
        buildingSize: 5,
        buildingSpeed: 60
      },
    
      Chickens: {
        buildingLevel: 1,
        timeToUpgradeInSeconds: 120,
        buildingSize: 5,
        buildingSpeed: 60
      },
    
      Cows: {
        buildingLevel: 1,
        timeToUpgradeInSeconds: 120,
        buildingSize: 5,
        buildingSpeed: 60
      },

      Pigs: {
        buildingLevel: 1,
        timeToUpgradeInSeconds: 120,
        buildingSize: 5,
        buildingSpeed: 60
      }
    }
  }
}


// REDUCER


export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_IS_LOGGED": {
      const newState = {...state};
      newState.settings.isLogged = !state.settings.isLogged;
      return newState;
    }
    case "SET_USERNAME": {
      const newState = {...state};
      newState.settings.username = action.newUsername;
      return newState;
    }
    case "SET_PASSWORD": {
      const newState = {...state};
      newState.settings.password = action.newPassword;
      return newState;
    }
    case "SET_EMAIL": {
      const newState = {...state};
      newState.settings.email = action.newEmail;
      return newState;
    }
    case "SET_AVATAR": {
      const newState = {...state};
      newState.settings.avatarUrl = action.newAvatarUrl;
      return newState;
    }
    case "SET_USER_MONEY": {
      const newState = {...state};
      newState.gameplay.userMoney = action.newUserMoney;
      return newState;
    }
    case "SET_USER_EXPERIENCE": {
      const newState = {...state};
      newState.gameplay.userExperience = action.newUserExperience;
      return newState;
    }
    case "SET_USER_LEVEL": {
      const newState = {...state};
      newState.gameplay.userLevel = action.newUserLevel;
      return newState;
    }
    case "SET_BUILDING_LEVEL": {
      const newState = {...state};
      newState.gameplay.buildingsLevels[action.buildingName].buildingLevel = action.newBuildingLevel;
      return newState;
    }
    case "SET_BUILDING_SIZE": {
      const newState = {...state};
      newState.gameplay.buildingsLevels[action.buildingName].buildingSize = action.newBuildingSize;
      return newState;
    }
    case "SET_BUILDING_SPEED": {
      const newState = {...state};
      newState.gameplay.buildingsLevels[action.buildingName].buildingSpeed = action.newBuildingSpeed;
      return newState;
    }
    case "SET_CROP_LEVEL": {
      const newState = {...state};
      newState.gameplay.cropsLevels[action.cropName].cropLevel = action.newCropLevel;
      return newState;
    }
    case "SET_CURRENT_CROP_XP": {
      const newState = {...state};
      newState.gameplay.cropsLevels[action.cropName].currentCropXp = action.newCurrentCropXp;
      return newState;
    }
    default: return {...state};
  }
}