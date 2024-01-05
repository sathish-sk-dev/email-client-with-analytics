import { FC } from "react";
import { useTheme } from "@mui/material/styles";
import { DrawerHeaderProps } from "./DrawerHeaderProps";

const DrawerHeader: FC<DrawerHeaderProps> = ({ isOpen }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        justifyContent: isOpen ? "flex-start" : "center",
        paddingLeft: theme.spacing(isOpen ? 3 : 0),
      }}
    />
  );
};

export default DrawerHeader;
