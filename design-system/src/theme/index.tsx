import {
  colors,
  createTheme,
  GlobalStyles,
  outlinedInputClasses,
  Shadows,
} from "@mui/material";
import "typeface-lato";
import "typeface-sacramento";

function overrideShadows(shadows: Partial<Record<number, string>>) {
  const originalTheme = createTheme();
  return originalTheme.shadows.map(
    (originalShadow, i) => shadows[i] || originalShadow
  ) as Shadows;
}

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
    h1: {
      fontSize: "24px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontSize: "14px",
      fontWeight: 600,
    },
  },
  shadows: overrideShadows({
    2: "1px 2px 2px rgba(217, 221, 228, 0.4)",
    3: "2px 2px 25px rgba(15, 20, 87, 0.08)",
    4: "1px 1px 50px rgba(20, 23, 54, 0.08)",
  }),
  palette: {
    text: {
      primary: "#141736",
      secondary: "#61758F",
    },
    primary: {
      main: "#6261B5",
    },
    secondary: {
      main: "#FA777C",
      contrastText: colors.common.white,
    },
    success: {
      main: "#009B72",
    },
    warning: {
      main: "#FA9369",
      contrastText: colors.common.white,
    },
    error: {
      main: "#FA5F5F",
    },
    action: {
      active: "#7C8EA6",
    },
    background: {
      default: "#F8F8FC",
      light: "#F7F7FB",
    },
    divider: "#DBE0E6",
  },
  shape: { borderRadius: 5 },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        // button uses shadows[2] by default
        // which should be used in hover/active states?
        // can we stop on the default shadow set?
        containedSizeMedium: {
          padding: "6px 24px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          backgroundColor: palette.background.light,
          [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
            { borderWidth: "1px" },
        }),
        input: {
          padding: "10px 14px",
          [`.${outlinedInputClasses.adornedStart} &`]: { paddingLeft: 0 },
          [`.${outlinedInputClasses.adornedEnd} &`]: { paddingRight: 0 },
        },
        notchedOutline: ({ theme: { palette } }) => ({
          borderColor: palette.divider,
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: ({ theme: { palette } }) => ({
          color: palette.text.secondary,
        }),
      },
    },
  },
});

export const GlobalOverrides = () => (
  <GlobalStyles
    styles={{ body: { fontFamily: theme.typography.fontFamily } }}
  />
);

export default theme;
