export interface CommonModalProps {
  visible: boolean;
  title: string;
  onClose: () => void;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
  primaryActionTitle: string;
  secondaryActionTitle: string;
}