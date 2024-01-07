import React, { FC, useCallback, useMemo } from "react";
import styles from "./Ripple.module.scss";
import { IRipple } from "./interfaces/IRipple";
import useRipple from "./useRipple";

const Ripple: FC = () => {
  const { addRipple, ripples } = useRipple();

  const getRippleStyles = useMemo(
    () => (ripple: IRipple) => {
      const { x, y, size } = ripple;
      return {
        top: y,
        left: x,
        width: size,
        height: size,
      };
    },
    [],
  );

  const renderRipples = useCallback(
    () =>
      ripples.map((ripple, index) => (
        <div
          className={styles.rippleContainer}
          key={`span${index}`}
          style={getRippleStyles(ripple)}
        />
      )),
    [getRippleStyles, ripples],
  );

  return (
    <div className={styles.container} onMouseDown={addRipple}>
      {renderRipples()}
    </div>
  );
};

export default Ripple;
