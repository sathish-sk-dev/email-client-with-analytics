import { FC, SVGProps } from "react";

export type IconProps = {
  iconType: FC<SVGProps<SVGSVGElement>>;
  isDisabled?: boolean;
  onClick?: () => void;
  containerClass?: string;
};
