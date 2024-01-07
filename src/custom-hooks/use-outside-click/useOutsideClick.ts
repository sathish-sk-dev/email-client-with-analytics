import { UseOutsideClickHooks } from "./UseOutsideClickHooks";
import { useEffect, useRef, useState } from "react";

const useOutsideClick = (): UseOutsideClickHooks => {
  const [isClickOutside, setIsClickOutside] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsClickOutside(true);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsClickOutside(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isClickOutside, setIsClickOutside };
};

export default useOutsideClick;
