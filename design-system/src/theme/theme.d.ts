import React from "react";

export {};

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    light: string;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fieldLabel: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    fieldLabel: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fieldLabel: true;
  }
}
