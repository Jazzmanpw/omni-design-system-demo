import { colors, createTheme, GlobalStyles, Shadows } from "@mui/material";
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
  },
  shadows: overrideShadows({
    2: "1px 2px 2px rgba(217, 221, 228, 0.4)",
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
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        // button uses shadows[2] by default
        // which should be used in hover/active states?
        // can we stop on the default shadow set?
        root: {
          textTransform: "none",
        },
        containedSizeMedium: {
          padding: "6px 24px",
          fontSize: "14px",
          fontWeight: 600,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: ({ theme }) => ({
          color: theme.palette.text.secondary,
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
