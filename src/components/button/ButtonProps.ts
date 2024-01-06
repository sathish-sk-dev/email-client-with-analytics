import { FC, SVGProps } from "react";

export type ButtonProps = {
  title: string;
  onClick: () => void;
  containerClass?: string;
  isDisabled?: boolean;
  iconType?: FC<SVGProps<SVGSVGElement>>;
  canShowIcon?: boolean;
};
