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
  storySort: {
    method: "alphabetical",
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
