import { Fragment } from "react";
import { Box, Button } from "@mui/material";
import { withGrid } from "./decorators";

export default {
  title: "Atoms/Button",
  argTypes: {
    label: { control: "text", description: "Button label" },
  },
  args: { label: "" },
};

export const Variants = ({ label }) => (
  <Box sx={{ display: "flex", gap: ({ spacing }) => spacing(1) }}>
    <Button variant="contained">{label || "Contained"}</Button>
  </Box>
);

export const Colors = ({ label }) => (
  <>
    {["contained"].map((variant) => (
      <Fragment key={variant}>
        <Button variant={variant} color="primary">
          {label || "Primary"}
        </Button>
      </Fragment>
    ))}
  </>
);
Colors.decorators = [withGrid(1, "100px")];

export const Sizes = ({ label }) => (
  <>
    {["contained"].map((variant) => (
      <Fragment key={variant}>
        <Button variant={variant} size="medium">
          {label || "Medium"}
        </Button>
      </Fragment>
    ))}
  </>
);
Sizes.decorators = [withGrid(2, "100px")];

export const States = ({ label }) => (
  <>
    {["contained"].map((variant) => (
      <Fragment key={variant}>
        <Button variant={variant}>{label || "Normal"}</Button>
        <Button variant={variant} disabled>
          {label || "Disabled"}
        </Button>
      </Fragment>
    ))}
  </>
);
States.decorators = [withGrid(2, "200px")];
