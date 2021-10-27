// INTERFACES


export interface UserInterface {
  settings: Settings;
  gameplay: Gameplay;
}
export interface Gameplay {
  userMoney: number;
  userExperience: number;
  userLevel: number;
  buildingBarnSize: number;
  buildingWellPumpSpeed: number;
  buildingChickenSize: number;
  buildingCowSize: number;
}
export interface Settings {
  isLogged: boolean;
  username: string;
  password: string;
  email: string;
  avatarUrl: string;
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
    userLevel: 1,
    buildingBarnSize: 25,
    buildingWellPumpSpeed: 1,
    buildingChickenSize: 5,
    buildingCowSize: 5
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
    case "SET_BARN_SIZE": {
      const newState = {...state};
      newState.gameplay.buildingBarnSize = action.newBarnSize;
      return newState;
    }
    case "SET_WELL_PUMP_SPEED": {
      const newState = {...state};
      newState.gameplay.buildingWellPumpSpeed = action.newWellSpeed;
      return newState;
    }
    case "SET_CHICKEN_SIZE": {
      const newState = {...state};
      newState.gameplay.buildingChickenSize = action.newChickenSize;
      return newState;
    }
    case "SET_COW_SIZE": {
      const newState = {...state};
      newState.gameplay.buildingCowSize = action.newCowSize;
      return newState;
    }
    default: return {...state};
  }
}