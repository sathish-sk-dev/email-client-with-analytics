import { useEffect, useState } from "react";
import { UseContainerWidthProps } from "./useContainerWidthProps";

const useContainerWidth = ({ ref }: UseContainerWidthProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        const containerWidth = ref.current.offsetWidth;
        setWidth(containerWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [ref]);

  return width;
};

export default useContainerWidth;
