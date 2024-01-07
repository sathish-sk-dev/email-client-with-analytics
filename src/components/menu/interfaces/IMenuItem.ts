export interface IMenuItem {
  id: string;
  title: string;
  onClick: (id: string) => void;
}
