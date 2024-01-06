import { FC, SVGProps } from "react";

export type IconProps = {
  iconType: FC<SVGProps<SVGSVGElement>> | null;
  isDisabled?: boolean;
  onClick?: () => void;
  containerClass?: string;
};
