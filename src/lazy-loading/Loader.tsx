import React from "react";
import { LinearProgress } from "@mui/material";
import { styled, Theme } from "@mui/system";

const LoaderWrapper = styled("div")(({ theme }: { theme: Theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 2001,
  width: "100%",
  "& > * + *": {
    marginTop: theme.spacing(2),
  },
}));

const Loader: React.FC = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

export default Loader;
