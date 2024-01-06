import Sheet from "react-modal-sheet";
import { FC } from "react";
import { BottomSheetProps } from "./BottomSheetProps";

const BottomSheet: FC<BottomSheetProps> = ({ children, isOpen, onClose }) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      <Sheet.Container>
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default BottomSheet;
