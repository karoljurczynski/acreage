export interface _User {
  test: string;
}

const initialState = {};
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 1: {
      return 1;
    }
    default: return state;
  }
}