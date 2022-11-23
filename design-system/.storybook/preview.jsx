import { CssBaseline, ThemeProvider } from "@mui/material";
import theme, { GlobalOverrides } from "../src/theme/index";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Atoms", "Molecules", "Organisms", "Templates", "Pages"],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      {/* we have to use ScopedCssBaseline if we migrate to the newer version
       * to not break the prev screens
       */}
      <CssBaseline />
      <GlobalOverrides />
      <Story />
    </ThemeProvider>
  ),
];
