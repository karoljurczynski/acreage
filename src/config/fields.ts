export interface FieldsPattern {
  fieldId: number;
  isFieldBought: boolean;
  fieldProps: FieldPropsPattern;
  cropProps: CropPropsPattern;
}

export interface FieldPropsPattern {
  groundRate: number;
  waterRate: number;
}

export interface CropPropsPattern {
  cropType: string;
  isReadyToHarvest: boolean;
  isWatered: boolean;
  isFertilized: boolean;
  buildingType?: string;
}

export const fields: FieldsPattern[] = [
  { 
    fieldId: 0, 
    isFieldBought: true, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "Grass",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 1, 
    isFieldBought: true, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: false,
      isFertilized: false
    }
  },
  { 
    fieldId: 2, 
    isFieldBought: true, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "Building",
      isReadyToHarvest: false,
      isWatered: false,
      isFertilized: false,
      buildingType: "Barn"
    }
  },
  { 
    fieldId: 3, 
    isFieldBought: true, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: true,
      isWatered: true,
      isFertilized: true
    }
  },
  { 
    fieldId: 4, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 5, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 6, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 7, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 8, 
    isFieldBought: true, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "dfdfdf",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: true
    }
  },
  { 
    fieldId: 9, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 10, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 11, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 12, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 13, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 14, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 15, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 16, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 17, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 18, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 19, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 20, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 21, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 22, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 23, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 24, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 25, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 26, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 27, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 28, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 29, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 30, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 31, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 32, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 33, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 34, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 35, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 36, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 37, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 38, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 39, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 40, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 41, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 42, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 43, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 44, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 45, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 46, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 47, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 48, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 49, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 50, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 51, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 52, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 53, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 54, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 55, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 56, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 57, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 58, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 59, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 60, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 61, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 62, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
  { 
    fieldId: 63, 
    isFieldBought: false, 
    fieldProps: {
      groundRate: 3,
      waterRate: 2
    },
    cropProps: {
      cropType: "",
      isReadyToHarvest: false,
      isWatered: true,
      isFertilized: false
    }
  },
];