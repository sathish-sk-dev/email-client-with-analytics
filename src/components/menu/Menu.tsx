import MenuItem from "./components/menu-item/MenuItem";
import styles from "./Menu.module.scss";
import { FC, useCallback, useEffect, useState } from "react";
import useOutsideClick from "../../custom-hooks/use-outside-click/useOutsideClick";
import { MenuProps } from "./types/MenuProps";
import cx from "classnames";
import { IMenuItem } from "./interfaces/IMenuItem";

const Menu: FC<MenuProps> = ({ isOpen, menuItems, onSelect }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { ref, setIsClickOutside, isClickOutside } = useOutsideClick();

  useEffect(() => {
    if (isClickOutside) {
      setMenuOpen(false);
    }
  }, [isClickOutside]);

  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setIsClickOutside(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setIsClickOutside(false);
  };

  const onClickItem = (item: IMenuItem) => {
    closeMenu();
    onSelect(item);
  };

  const renderMenuItems = useCallback(() => {
    if (isMenuOpen) {
      return (
        <div className={cx(styles.menu, styles.fadeIn)}>
          {menuItems.map((item) => (
            <MenuItem item={item} onClick={onClickItem} />
          ))}
        </div>
      );
    }
  }, []);

  return (
    <div ref={ref} className={styles.menuContainer}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        Menu
      </div>
      {renderMenuItems()}
    </div>
  );
};

export default Menu;
