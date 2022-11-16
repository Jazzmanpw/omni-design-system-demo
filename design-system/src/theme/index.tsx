import { colors, createTheme, Shadows } from "@mui/material";
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
  },
  shadows: overrideShadows({
    2: "1px 2px 2px rgba(217, 221, 228, 0.4)",
  }),
  palette: {
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
  },
});

export default theme;
