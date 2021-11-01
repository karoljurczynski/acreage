// INTERFACES


export interface FieldInterface {
  fieldId: number;
  fieldProps: FieldProps;
  cropProps: CropProps;
  animalProps: AnimalProps;
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
  plantedAtInSeconds: number;
  isReadyToHarvest: boolean;
  isWatered: boolean;
  isFertilized: boolean;
}
export interface AnimalProps {
  animalType: string;
  animalAmount: number;
  productionStartedAtInSeconds: number;
  isReadyToCollect: boolean;
  isFed: boolean;
  isCleaned: boolean;
}
export interface BuildingProps {
  buildingType: string;
  buildStartedAtInSeconds: number;
  isBuildReady: boolean;
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
          plantedAtInSeconds: 0,
          isReadyToHarvest: false,
          isWatered: false,
          isFertilized: false
        },
        animalProps: {
          animalType: "",
          animalAmount: 0,
          productionStartedAtInSeconds: 0,
          isReadyToCollect: false,
          isFed: false,
          isCleaned: false
        },
        buildingProps: {
          buildingType: "",
          buildStartedAtInSeconds: 0,
          isBuildReady: false
        }
      }
    );
  }

  // DEFAULT FIELDS
  fields[19].fieldProps.isFieldBought = true;
  fields[19].fieldProps.groundRate = 1;
  fields[19].fieldProps.waterRate = 1;

  fields[20].fieldProps.isFieldBought = true;
  fields[20].fieldProps.groundRate = 2;
  fields[20].fieldProps.waterRate = 2;

  fields[27].fieldProps.isFieldBought = true;
  fields[27].buildingProps.buildingType = "Farmhouse";
  fields[27].fieldProps.groundRate = 1;
  fields[27].fieldProps.waterRate = 1;

  fields[28].fieldProps.isFieldBought = true;
  fields[28].buildingProps.buildingType = "Barn";
  fields[28].fieldProps.groundRate = 1;
  fields[28].fieldProps.waterRate = 1;

  for (let i = 0; i < 64; i++) {
    fields[i].fieldProps.fieldPrice = countFieldPrice(fields[i].fieldProps.groundRate, fields[i].fieldProps.waterRate);
  }
  for (let i = 0; i < 64; i++) {
    fields[i].fieldProps.fieldName = `${fields[i].fieldProps.fieldPrice} $`;
  }

  fields[19].fieldProps.fieldName = "Empty";
  fields[20].fieldProps.fieldName = "Empty";
  fields[27].fieldProps.fieldName = "Farmhouse";
  fields[28].fieldProps.fieldName = "Barn";

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
      newFields[action.fieldId].fieldProps.fieldName = action.newFieldName;
      return newFields;
    }


    case "SET_CROP_TYPE": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.cropType = action.newCropType;
      return newFields;
    }
    case "SET_PLANTED_TIME": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.plantedAtInSeconds = action.newTimeInSeconds;
      return newFields;
    }
    case "SET_IS_CROP_READY_TO_HARVEST": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.isReadyToHarvest = action.isReadyToHarvest;
      return newFields;
    }
    case "SET_IS_CROP_WATERED": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.isWatered = action.isWatered;
      return newFields;
    }
    case "SET_IS_CROP_FERTILIZED": {
      const newFields = [...state];
      newFields[action.fieldId].cropProps.isFertilized = action.isFertilized;
      return newFields;
    }


    case "SET_ANIMAL_TYPE": {
      const newFields = [...state];
      newFields[action.fieldId].animalProps.animalType = action.newAnimalType;
      return newFields;
    }
    case "SET_ANIMAL_AMOUNT": {
      const newFields = [...state];
      newFields[action.fieldId].animalProps.animalAmount = action.newAnimalAmount;
      return newFields;
    }
    case "SET_PRODUCTION_STARTED_TIME": {
      const newFields = [...state];
      newFields[action.fieldId].animalProps.productionStartedAtInSeconds = action.newTimeInSeconds;
      return newFields;
    }
    case "SET_IS_ANIMAL_READY_TO_COLLECT": {
      const newFields = [...state];
      newFields[action.fieldId].animalProps.isReadyToCollect = action.isReadyToCollect;
      return newFields;
    }
    case "SET_IS_ANIMAL_FED": {
      const newFields = [...state];
      newFields[action.fieldId].animalProps.isFed = action.isFed;
      return newFields;
    }
    case "SET_IS_ANIMAL_CLEANED": {
      const newFields = [...state];
      newFields[action.fieldId].animalProps.isCleaned = action.isCleaned;
      return newFields;
    }


    case "SET_BUILDING_TYPE": {
      const newFields = [...state];
      newFields[action.fieldId].buildingProps.buildingType = action.newBuildingType;
      return newFields;
    }
    case "SET_BUILD_STARTED_TIME": {
      const newFields = [...state];
      newFields[action.fieldId].buildingProps.buildStartedAtInSeconds = action.newTimeInSeconds;
      return newFields;
    }
    case "SET_IS_BUILD_READY": {
      const newFields = [...state];
      newFields[action.fieldId].buildingProps.isBuildReady = action.isBuildReady;
      return newFields;
    }


    default: return [...state];
  }
}