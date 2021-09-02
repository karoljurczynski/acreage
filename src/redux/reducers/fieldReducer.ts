// INTERFACES


export interface _Field {
  field: _FieldInfo;
  isFieldMenuOpened: boolean;
}
export interface _FieldInfo {
  fieldId: number;
  isFieldBought: boolean;
  fieldProps: _FieldProps;
  cropProps: _CropProps;
}
export interface _FieldProps {
  groundRate: number;
  waterRate: number;
}
export interface _CropProps {
  cropType?: string;
  buildingType?: string;
  isReadyToHarvest: boolean;
  isWatered: boolean;
  isFertilized: boolean;
}


// INITIAL STATE

const getRandomRate = (): number => {
  const ratesArray = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];
  return ratesArray[Math.floor(Math.random() * 15)];
}

const createFieldsArray = () => {
  const fields: _Field[] = [];
  for (let i = 0; i < 64; i++) {
    fields.push(
      {
        field: {
          fieldId: i, 
          isFieldBought: false, 
          fieldProps: {
            groundRate: getRandomRate(),
            waterRate: getRandomRate()
          },
          cropProps: {
            cropType: "",
            buildingType: "",
            isReadyToHarvest: false,
            isWatered: false,
            isFertilized: false
          }
        },
        isFieldMenuOpened: false
      }
    );
  }
  return fields;
}


// REDUCER

export const fieldReducer = (state = createFieldsArray(), action: any) => {
  switch (action.type) {
    case "SET_IS_FIELD_MENU_OPENED": {
      const newFields = state;
      newFields[action.fieldId].isFieldMenuOpened = !state[action.fieldId].isFieldMenuOpened;
      return newFields;
    }
    case "SET_IS_FIELD_BOUGHT": {
      const newFields = state;
      newFields[action.fieldId].field.isFieldBought = !state[action.fieldId].field.isFieldBought;
      return newFields;
    }
    case "SET_CROP_TYPE": {
      const newFields = state;
      newFields[action.fieldId].field.cropProps.cropType = action.cropType;
      return newFields;
    }
    case "SET_BUILDING_TYPE": {
      const newFields = state;
      newFields[action.fieldId].field.cropProps.buildingType = action.buildingType;
      return newFields;
    }
    case "SET_IS_CROP_READY_TO_HARVEST": {
      const newFields = state;
      newFields[action.fieldId].field.cropProps.isReadyToHarvest = !state[action.fieldId].field.cropProps.isReadyToHarvest;
      return newFields;
    }
    case "SET_IS_CROP_WATERED": {
      const newFields = state;
      newFields[action.fieldId].field.cropProps.isWatered = !state[action.fieldId].field.cropProps.isWatered;
      return newFields;
    }
    case "SET_IS_CROP_FERTILIZED": {
      const newFields = state;
      newFields[action.fieldId].field.cropProps.isFertilized = !state[action.fieldId].field.cropProps.isFertilized;
      return newFields;
    }
    default: return state;
  }
}