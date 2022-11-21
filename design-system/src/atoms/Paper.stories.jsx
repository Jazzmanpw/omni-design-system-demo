import { Box, Paper as MuiPaper, Typography } from "@mui/material";

export default {
  title: "Atoms/Paper",
};

export const Paper = ({ elevation, variant, width, height }) => (
  <MuiPaper elevation={elevation} variant={variant} sx={{ width, height }} />
);
Paper.argTypes = {
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
Paper.args = { width: 80, height: 80 };

export const Elevations = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(5, 40px)",
      gap: ({ spacing }) => spacing(5),
    }}
  >
    <MuiPaper elevation={2} sx={{ gridArea: "1 / 3 / span 2 / span 1" }}>
      <Typography variant="h1">Elevation 2</Typography>
      <Typography>Box/Button Shadow</Typography>
      Used for buttons, maybe somewhere else
    </MuiPaper>
    <MuiPaper elevation={3} sx={{ gridArea: "1 / 1 / span 5 / span 2" }}>
      <Typography variant="h1">Elevation 3</Typography>
      <Typography>Main Shadow / v2</Typography>
      Seems to be used for papers
    </MuiPaper>
    <MuiPaper elevation={4} sx={{ gridArea: "3 / 3 / span 3 / span 1" }}>
      <Typography variant="h1">Elevation 4</Typography>
      <Typography>Main Shadow / v1</Typography>
      Seems to be used for papers
    </MuiPaper>
  </Box>
);

export const Variants = () => (
  <MuiPaper sx={{ padding: ({ spacing }) => spacing(2) }}>
    <Typography variant="h1" mb={2}>
      Variant: elevated
    </Typography>
    <MuiPaper variant="outlined">
      <Typography variant="h1">Variant:outlined</Typography>
      Used for Papers inside other papers (like list item rows)
    </MuiPaper>
  </MuiPaper>
);
