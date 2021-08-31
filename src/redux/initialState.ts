import { FieldsPattern } from '../config/fields';
interface FieldStatePattern {
  field: FieldsPattern;
  isFieldMenuOpened: boolean;
}

interface StatePattern {
  fields: FieldStatePattern[];
}

const createState = (): StatePattern => {
  let state: StatePattern = {
    fields: []
  };
  for (let i = 0; i < 64; i++) {
    state.fields.push(
      {
        field: {
          fieldId: i, 
          isFieldBought: false, 
          fieldProps: {
            groundRate: 0,
            waterRate: 0
          },
          cropProps: {
            cropType: "",
            isReadyToHarvest: false,
            isWatered: false,
            isFertilized: false
          }
        },
        isFieldMenuOpened: false
      }
    );
  }
  return state;
}

export const initialState: StatePattern = createState();