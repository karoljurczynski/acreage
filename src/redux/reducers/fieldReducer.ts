// INTERFACES


export interface FieldInterface {
  data: FieldInfo;
  isFieldMenuOpened: boolean;
}
export interface FieldInfo {
  fieldId: number;
  fieldProps: FieldProps;
  cropProps: CropProps;
}
export interface FieldProps {
  isFieldBought: boolean;
  fieldPrice: number;
  groundRate: number;
  waterRate: number;
}
export interface CropProps {
  cropType?: string;
  buildingType?: string;
  timeToGrow: number;
  isReadyToHarvest: boolean;
  isWatered: boolean;
  isFertilized: boolean;
}


// FUNCTIONS TO CREATE INITIAL STATE


const getRandomRate = (): number => {
  const ratesArray = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];
  return ratesArray[Math.floor(Math.random() * 15)];
}
const countFieldPrice = (groundRate: number, waterRate: number): number => {
  return 500 + (1000 * groundRate) + (1000 * waterRate);
}
const createFieldsArray = () => {
  const fields: FieldInterface[] = [];
  for (let i = 0; i < 64; i++) {
    fields.push(
      {
        data: {
          fieldId: i, 
          fieldProps: {
            isFieldBought: false,
            groundRate: getRandomRate(),
            waterRate: getRandomRate(),
            fieldPrice: 0
          },
          cropProps: {
            cropType: "",
            buildingType: "",
            timeToGrow: 0,
            isReadyToHarvest: false,
            isWatered: false,
            isFertilized: false
          }
        },
        isFieldMenuOpened: false
      }
    );
  }
  for (let i = 0; i < 64; i++) {
    fields[i].data.fieldProps.fieldPrice = countFieldPrice(fields[i].data.fieldProps.groundRate, fields[i].data.fieldProps.waterRate);
  }

  // DEFAULT FIELDS
  fields[19].data.fieldProps.isFieldBought = true;
  fields[19].data.fieldProps.groundRate = 1;
  fields[19].data.fieldProps.waterRate = 1;

  fields[20].data.fieldProps.isFieldBought = true;
  fields[20].data.fieldProps.groundRate = 2;
  fields[20].data.fieldProps.waterRate = 2;

  fields[27].data.fieldProps.isFieldBought = true;
  fields[27].data.cropProps.buildingType = "Farmhouse";
  fields[27].data.fieldProps.groundRate = 1;
  fields[27].data.fieldProps.waterRate = 1;

  fields[28].data.fieldProps.isFieldBought = true;
  fields[28].data.cropProps.buildingType = "Barn";
  fields[28].data.fieldProps.groundRate = 1;
  fields[28].data.fieldProps.waterRate = 1;

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
      newFields[action.fieldId].data.fieldProps.isFieldBought = !state[action.fieldId].data.fieldProps.isFieldBought;
      return newFields;
    }
    case "SET_CROP_TYPE": {
      const newFields = state;
      newFields[action.fieldId].data.cropProps.cropType = action.cropType;
      return newFields;
    }
    case "SET_BUILDING_TYPE": {
      const newFields = state;
      newFields[action.fieldId].data.cropProps.buildingType = action.buildingType;
      return newFields;
    }
    case "SET_IS_CROP_READY_TO_HARVEST": {
      const newFields = state;
      newFields[action.fieldId].data.cropProps.isReadyToHarvest = !state[action.fieldId].data.cropProps.isReadyToHarvest;
      return newFields;
    }
    case "UPDATE_TIME_TO_GROW": {
      const newFields = state;
      newFields[action.fieldId].data.cropProps.timeToGrow = action.newTimeInSeconds;
      return newFields;
    }
    case "SET_IS_CROP_WATERED": {
      const newFields = state;
      newFields[action.fieldId].data.cropProps.isWatered = !state[action.fieldId].data.cropProps.isWatered;
      return newFields;
    }
    case "SET_IS_CROP_FERTILIZED": {
      const newFields = state;
      newFields[action.fieldId].data.cropProps.isFertilized = !state[action.fieldId].data.cropProps.isFertilized;
      return newFields;
    }
    default: return state;
  }
}