import { Fragment } from "react";
import { Box, Button } from "@mui/material";
import { withGrid } from "./decorators";

export default {
  title: "Atoms/Button Demo",
  argTypes: {
    label: { control: "text", description: "Button label" },
  },
  args: { label: "" },
};

export const Variants = ({ label }) => (
  <Box sx={{ display: "flex", gap: ({ spacing }) => spacing(1) }}>
    <Button variant="text">{label || "Text"}</Button>
    <Button variant="contained">{label || "Contained"}</Button>
    <Button variant="outlined">{label || "Outlined"}</Button>
  </Box>
);

export const Colors = ({ label }) => (
  <>
    {["text", "contained", "outlined"].map((variant) => (
      <Fragment key={variant}>
        <Button variant={variant} color="primary">
          {label || "Primary"}
        </Button>
        <Button variant={variant} color="secondary">
          {label || "Secondary"}
        </Button>
        <Button variant={variant} color="info">
          {label || "Info"}
        </Button>
        <Button variant={variant} color="success">
          {label || "Success"}
        </Button>
        <Button variant={variant} color="warning">
          {label || "Warning"}
        </Button>
        <Button variant={variant} color="error">
          {label || "Error"}
        </Button>
      </Fragment>
    ))}
  </>
);
Colors.decorators = [withGrid(6)];

export const Sizes = ({ label }) => (
  <>
    {["text", "contained", "outlined"].map((variant) => (
      <Fragment key={variant}>
        <Button variant={variant} size="small">
          {label || "Small"}
        </Button>
        <Button variant={variant} size="medium">
          {label || "Medium"}
        </Button>
        <Button variant={variant} size="large">
          {label || "Large"}
        </Button>
      </Fragment>
    ))}
  </>
);
Sizes.decorators = [withGrid(3, "100px")];

export const States = ({ label }) => (
  <>
    {["text", "contained", "outlined"].map((variant) => (
      <Fragment key={variant}>
        <Button variant={variant}>{label || "Normal"}</Button>
        <Button variant={variant} disabled>
          {label || "Disabled"}
        </Button>
        <Button variant={variant} fullWidth>
          {label || "Full width"}
        </Button>
      </Fragment>
    ))}
  </>
);
States.decorators = [withGrid(3, "200px")];
