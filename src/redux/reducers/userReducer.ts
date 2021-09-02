// INTERFACES


export interface User {
  settings: Settings;
  gameplay: Gameplay;
}
export interface Gameplay {
  userMoney: number;
  userExperience: number;
  userLevel: number;
}
export interface Settings {
  isLogged: boolean;
  username: string;
  password: string;
  email: string;
  avatarUrl: string;
}
export interface StorageItem {
  name: string;
  amount: number;
}


// INITIAL STATE


const initialState: User = {
  settings: {
    isLogged: false,
    username: "",
    password: "",
    email: "",
    avatarUrl: ""
  },
  gameplay: {
    userMoney: 0,
    userExperience: 0,
    userLevel: 1
  }
}


// REDUCER


export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_IS_LOGGED": {
      const newState = state;
      newState.settings.isLogged = !state.settings.isLogged;
      return newState;
    }
    case "SET_USERNAME": {
      const newState = state;
      newState.settings.username = action.newUsername;
      return newState;
    }
    case "SET_PASSWORD": {
      const newState = state;
      newState.settings.password = action.newPassword;
      return newState;
    }
    case "SET_EMAIL": {
      const newState = state;
      newState.settings.email = action.newEmail;
      return newState;
    }
    case "SET_AVATAR": {
      const newState = state;
      newState.settings.avatarUrl = action.newAvatarUrl;
      return newState;
    }
    case "SET_USER_MONEY": {
      const newState = state;
      newState.gameplay.userMoney = action.newUserMoney;
      return newState;
    }
    case "SET_USER_EXPERIENCE": {
      const newState = state;
      newState.gameplay.userExperience = action.newUserExperience;
      return newState;
    }
    case "SET_USER_LEVEL": {
      const newState = state;
      newState.gameplay.userLevel = action.newUserLevel;
      return newState;
    }
    default: return state;
  }
}