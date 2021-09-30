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
  closeFieldMenu: (e: React.MouseEvent) => void;
}
export interface FieldPropertiesInterface {
  fieldId: number;
  closeWindow: () => void;
}
export interface FieldMenuInfoBoxInterface {
  rateInfoBox?: boolean;
  title: string;
  content: string | number;
}