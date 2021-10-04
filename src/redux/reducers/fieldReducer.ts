// IMPORTS


import logo from "../../images/logo.png";
import barn from '../../images/buildings/barn.png';
import farmhouse from '../../images/buildings/farmhouse.png';


// INTERFACES


export interface FieldInterface {
  fieldId: number;
  fieldProps: FieldProps;
  cropProps: CropProps;
  buildingProps: BuildingProps;
}
export interface FieldProps {
  isFieldBought: boolean;
  fieldName: string;
  fieldPrice: number;
  groundRate: number;
  waterRate: number;
}
export interface CropProps {
  cropType: string;
  cropIcon: string;
  timeToGrow: number;
  isReadyToHarvest: boolean;
  isWatered: boolean;
  isFertilized: boolean;
}
export interface BuildingProps {
  buildingType: string;
  buildingIcon: string;
  buildingLevel: number;
  buildingStats: BuildingStats;
}
export interface BuildingStats {
  isUpgradeReady: boolean;
  capacity: number;
}

// INITIAL STATE CREATING


const getRandomRate = (): number => {
  const ratesArray = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];
  return ratesArray[Math.floor(Math.random() * 15)];
}
const countFieldPrice = (groundRate: number, waterRate: number): number => {
  return 500 + (1000 * groundRate) + (1000 * waterRate);
}
const createFieldsArray = (): FieldInterface[] => {
  const fields: FieldInterface[] = [];
  for (let i = 0; i < 64; i++) {
    fields.push(
      {
        fieldId: i,
        fieldProps: {
          isFieldBought: false,
          fieldName: "",
          groundRate: getRandomRate(),
          waterRate: getRandomRate(),
          fieldPrice: 0
        },
        cropProps: {
          cropType: "",
          cropIcon: logo, 
          timeToGrow: 0,
          isReadyToHarvest: false,
          isWatered: false,
          isFertilized: false
        },
        buildingProps: {
          buildingType: "",
          buildingIcon: logo,
          buildingLevel: 0,
          buildingStats: {
            isUpgradeReady: false,
            capacity: 0
          }
        }
      }
    );
  }

  for (let i = 0; i < 64; i++) {
    fields[i].fieldProps.fieldPrice = countFieldPrice(fields[i].fieldProps.groundRate, fields[i].fieldProps.waterRate);
  }
  for (let i = 0; i < 64; i++) {
    fields[i].fieldProps.fieldName = `${fields[i].fieldProps.fieldPrice} $`;
  }

  // DEFAULT FIELDS
  fields[19].fieldProps.isFieldBought = true;
  fields[19].fieldProps.fieldName = "Empty";
  fields[19].fieldProps.groundRate = 1;
  fields[19].fieldProps.waterRate = 1;

  fields[20].fieldProps.isFieldBought = true;
  fields[20].fieldProps.fieldName = "Empty";
  fields[20].fieldProps.groundRate = 2;
  fields[20].fieldProps.waterRate = 2;

  fields[27].fieldProps.isFieldBought = true;
  fields[27].buildingProps.buildingIcon = farmhouse;
  fields[27].fieldProps.fieldName = "Farmhouse";
  fields[27].buildingProps.buildingType = "Farmhouse";
  fields[27].fieldProps.groundRate = 1;
  fields[27].fieldProps.waterRate = 1;

  fields[28].fieldProps.isFieldBought = true;
  fields[28].buildingProps.buildingIcon = barn;
  fields[28].fieldProps.fieldName = "Barn";
  fields[28].buildingProps.buildingType = "Barn";
  fields[28].fieldProps.groundRate = 1;
  fields[28].fieldProps.waterRate = 1;

  return fields;
}


// REDUCER


export const fieldReducer = (state: FieldInterface[] = createFieldsArray(), action: any): FieldInterface[] => {
  switch (action.type) {
    case "SET_IS_FIELD_BOUGHT": {
      const newFields = [...state];
      newFields[action.fieldId].fieldProps.isFieldBought = !state[action.fieldId].fieldProps.isFieldBought;
      return newFields;
    }
    case "SET_FIELD_NAME": {
      const newFields = [...state];
      newFields[action.fieldId].fieldProps.fieldName = action.fieldName;
      return newFields;
    }
    case "SET_CROP_TYPE": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.cropType = action.cropType;
      return newFields;
    }
    case "SET_CROP_ICON": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.cropIcon = action.newIcon;
      return newFields;
    }
    case "SET_IS_CROP_READY_TO_HARVEST": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.isReadyToHarvest = !state[action.fieldId].cropProps.isReadyToHarvest;
      return newFields;
    }
    case "UPDATE_TIME_TO_GROW": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.timeToGrow = action.newTimeInSeconds;
      return newFields;
    }
    case "SET_IS_CROP_WATERED": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.isWatered = !state[action.fieldId].cropProps.isWatered;
      return newFields;
    }
    case "SET_IS_CROP_FERTILIZED": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.isFertilized = !state[action.fieldId].cropProps.isFertilized;
      return newFields;
    }
    case "SET_BUILDING_TYPE": {
      const newFields = [...state];
      newFields[action.fieldId].buildingProps.buildingType = action.newBuildingType;
      return newFields;
    }
    case "SET_BUILDING_ICON": {
      const newFields = [...state];
      newFields[action.fieldId].buildingProps.buildingIcon = action.newIcon;
      return newFields;
    }
    case "SET_BUILDING_LEVEL": {
      const newFields = [...state];
      newFields[action.fieldId].buildingProps.buildingLevel = action.newLevel;
      return newFields;
    }
    case "SET_IS_UPGRADE_READY": {
      const newFields = [...state];
      newFields[action.fieldId].buildingProps.buildingStats.isUpgradeReady = !state[action.fieldId].buildingProps.buildingStats.isUpgradeReady;
      return newFields;
    }
    case "SET_BUILDING_CAPACITY": {
      const newFields = [...state];
      newFields[action.fieldId].buildingProps.buildingStats.capacity = action.newCapacity;
      return newFields;
    }
    
    default: return [...state];
  }
}