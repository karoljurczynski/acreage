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
  handleWindow: () => void;
}
export interface BuildButtonProps {
  handleWindow: () => void;
}
export interface UpgradeButtonProps {
  handleWindow: () => void;
}
export interface BuySellFieldButtonProps {
  isBuyButton: boolean;
  handleWindow: () => void;
}
export interface DestroyButtonProps {
  handleWindow: () => void;
}
export interface CropCareButtonProps {
  fieldId: number;
  careType: "water" | "fertilizer";
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
export interface UpgradeWindowPropsInterface {
  fieldId: number;
  closeWindow: () => void;
}
export interface DestroyWindowPropsInterface {
  fieldId: number;
  closeWindow: () => void;
}
export interface BuySellFieldWindowPropsInterface {
  fieldId: number;
  isBuyWindow: boolean;
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