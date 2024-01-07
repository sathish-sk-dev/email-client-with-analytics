export type AppBarProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
  onSearch: (value: string) => void;
  onClearSearch: () => void;
  onClickCompose: () => void;
};
