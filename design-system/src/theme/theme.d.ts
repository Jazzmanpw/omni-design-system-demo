import React from "react";

export {};

declare module "@mui/material/styles/createPalette" {
  export interface TypeBackground {
    light: string;
  }
}

declare module "@mui/material/styles" {
  export interface TypographyVariants {
    fieldLabel: React.CSSProperties;
  }

  export interface TypographyVariantsOptions {
    fieldLabel: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    fieldLabel: true;
  }
}
