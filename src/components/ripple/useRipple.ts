import React, { useLayoutEffect, useState } from "react";
import { IRipple } from "./interfaces/IRipple";
import { UseRippleHooks } from "./types/UseRippleHooks";

const useRipple = (): UseRippleHooks => {
  const [ripples, setRipples] = useState<IRipple[]>([]);

  useLayoutEffect(() => {
    let bounce: NodeJS.Timeout | null = null;

    if (ripples.length > 0) {
      clearTimeout(bounce!);

      bounce = setTimeout(() => {
        setRipples([]);
        clearTimeout(bounce!);
      }, 3000);
    }

    return () => clearTimeout(bounce!);
  }, [ripples]);

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple: IRipple = { x, y, size };

    setRipples([...ripples, newRipple]);
  };

  return {
    ripples,
    addRipple,
  };
};

export default useRipple;
