import type { Theme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  export interface TypeBackground {
    light: string;
  }
}
