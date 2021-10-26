// INTERFACES


export interface AppPropsInterface {

}
export interface BoardPropsInterface {
  
}
export interface BackgroundCloserPropsInterface {
  onClick: () => void;
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

export interface PlantButtonProps {
  handleWindow: () => void;
}
export interface HarvestButtonProps {
  fieldId: number;
  handleWindow: () => void;
}
export interface BuildButtonProps {
  handleWindow: () => void;
}
export interface DestroyButtonProps {
  handleWindow: () => void;
}
export interface BuySellFieldButtonProps {
  fieldId: number;
}

export interface PlantWindowPropsInterface {
  fieldId: number;
  closeWindow: () => void;
}
export interface HarvestWindowPropsInterface {
  fieldId: number;
  closeWindow: () => void;
}
export interface BuildWindowPropsInterface {
  fieldId: number;
  closeWindow: () => void;
}
export interface DestroyWindowPropsInterface {
  fieldId: number;
  closeWindow: () => void;
}
export interface WarningWindowPropsInterface {
  warningText: string;
  warningTip: string;
  shortcutButton?: ShortcutButtonInterface;
  closeWindow: () => void;
}
export interface ConfirmWindowPropsInterface {
  confirmHeading: string;
  confirmText: string;
  confirmFunction: () => void;
  closeWindow: () => void;
}
export interface ShortcutButtonInterface {
  shortcutPath: string;
  shortcutTitle: string;
}

export interface StorageContentPropsInterface {
  
}