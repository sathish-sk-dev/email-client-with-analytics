import { ReactNode } from "react";

export type BottomSheetProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
