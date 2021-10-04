// INTERFACES


export interface AppPropsInterface {

}
export interface BoardPropsInterface {
  
}
export interface FieldPropsInterface {
  fieldId: number;
}
export interface FieldMenuPropsInterface {
  fieldId: number;
  fieldName: string;
  fieldIcon: string;
  closeFieldMenu: (e: React.MouseEvent) => void;
}
export interface FieldPropertiesInterface {
  fieldId: number;
  fieldIcon: string;
  closeWindow: () => void;
}
export interface FieldMenuInfoBoxInterface {
  rateInfoBox?: boolean;
  title: string;
  content: string | number;
}