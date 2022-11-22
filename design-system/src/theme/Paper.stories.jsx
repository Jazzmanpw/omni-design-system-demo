import { Box, Paper, Typography } from "@mui/material";

export default {
  title: "Atoms/Paper",
};

export const _Paper = ({ elevation, variant, width, height }) => (
  <Paper elevation={elevation} variant={variant} sx={{ width, height }} />
);
_Paper.argTypes = {
  elevation: {
    control: { type: "number", min: 1, max: 24 },
  },
  variant: {
    control: "inline-radio",
    options: ["default", "elevation", "outlined"],
    mapping: { default: undefined },
  },
  width: {
    control: { type: "range", min: 40, max: 400, step: 20 },
  },
  height: {
    control: { type: "range", min: 40, max: 400, step: 20 },
  },
};
_Paper.args = { width: 80, height: 80 };

export const Elevations = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(5, 40px)",
      gap: ({ spacing }) => spacing(5),
    }}
  >
    <Paper elevation={2} sx={{ gridArea: "1 / 3 / span 2 / span 1" }}>
      <Typography variant="h1">Elevation 2</Typography>
      <Typography>Box/Button Shadow</Typography>
      Used for buttons, maybe somewhere else
    </Paper>
    <Paper elevation={3} sx={{ gridArea: "1 / 1 / span 5 / span 2" }}>
      <Typography variant="h1">Elevation 3</Typography>
      <Typography>Main Shadow / v2</Typography>
      Seems to be used for papers
    </Paper>
    <Paper elevation={4} sx={{ gridArea: "3 / 3 / span 3 / span 1" }}>
      <Typography variant="h1">Elevation 4</Typography>
      <Typography>Main Shadow / v1</Typography>
      Seems to be used for papers
    </Paper>
  </Box>
);

export const Variants = () => (
  <Paper sx={{ padding: ({ spacing }) => spacing(2) }}>
    <Typography variant="h1" mb={2}>
      Variant: elevated
    </Typography>
    <Paper variant="outlined">
      <Typography variant="h1">Variant:outlined</Typography>
      Used for Papers inside other papers (like list item rows)
    </Paper>
  </Paper>
);
