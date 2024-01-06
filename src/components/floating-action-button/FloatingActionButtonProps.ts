import { FC, SVGProps } from "react";

export type FloatingActionButtonProps = {
  iconType: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
};
