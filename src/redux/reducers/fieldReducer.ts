import { initialState } from "../initialState";

export const fieldReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_IS_FIELD_MENU_OPENED": {
      const newFields = state.fields;
      newFields[action.fieldId].isFieldMenuOpened = !state.fields[action.fieldId].isFieldMenuOpened;
      return {
        ...state,
        fields: newFields 
      }
    }
    case "SET_IS_FIELD_BOUGHT": {
      const newFields = state.fields;
      newFields[action.fieldId].field.isFieldBought = !state.fields[action.fieldId].field.isFieldBought;

      return {
        ...state,
        fields: newFields
      }
    }
    default: return state;
  }
}