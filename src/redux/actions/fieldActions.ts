export const setFieldMenuOpened = (fieldId: number) => {
  return {
    type: "SET_IS_FIELD_MENU_OPENED",
    fieldId: fieldId
  }
};

export const setIsFieldBought = (fieldId: number) => {
  return {
    type: "SET_IS_FIELD_BOUGHT",
    fieldId: fieldId
  }
};

export const setFieldProp = (fieldId: number, key: string, value: string | number | boolean) => {
  return {
    type: "SET_IS_FIELD_MENU_OPENED",
    fieldId: fieldId,
    key: key,
    value: value
  }
};