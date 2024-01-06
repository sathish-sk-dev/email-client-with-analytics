export type AppBarProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
  searchText: string;
  onChangeSearch: (text: string) => void;
  onSearch: () => void;
  onClearSearch: () => void;
};
