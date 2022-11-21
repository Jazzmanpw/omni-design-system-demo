import { Fragment } from "react";
import { Box, Button as MuiButton } from "@mui/material";
import { withGrid } from "./decorators";

export default {
  title: "Atoms/Button Demo",
  argTypes: {
    label: { control: "text", description: "Button label" },
  },
  args: { label: "" },
};

export const Button = ({ label, variant, size, state }) => (
  <MuiButton
    variant={variant}
    size={size}
    disabled={state.includes("disabled")}
    fullWidth={state.includes("fullWidth")}
  >
    {label || "Button"}
  </MuiButton>
);
Button.argTypes = {
  size: {
    control: "inline-radio",
    description: "Button size",
    options: ["default", "small", "medium", "large"],
    mapping: { default: undefined },
  },
  variant: {
    control: "inline-radio",
    description: "Button variant",
    options: ["default", "text", "contained", "outlined"],
    mapping: { default: undefined },
  },
  state: {
    description: "Button state",
    control: "inline-check",
    options: ["disabled", "fullWidth"],
  },
};
Button.args = {
  size: "default",
  variant: "default",
  state: [],
};

export const Variants = ({ label }) => (
  <Box sx={{ display: "flex", gap: ({ spacing }) => spacing(1) }}>
    <MuiButton variant="text">{label || "Text"}</MuiButton>
    <MuiButton variant="contained">{label || "Contained"}</MuiButton>
    <MuiButton variant="outlined">{label || "Outlined"}</MuiButton>
  </Box>
);

export const Colors = ({ label }) => (
  <>
    {["text", "contained", "outlined"].map((variant) => (
      <Fragment key={variant}>
        <MuiButton variant={variant} color="primary">
          {label || "Primary"}
        </MuiButton>
        <MuiButton variant={variant} color="secondary">
          {label || "Secondary"}
        </MuiButton>
        <MuiButton variant={variant} color="info">
          {label || "Info"}
        </MuiButton>
        <MuiButton variant={variant} color="success">
          {label || "Success"}
        </MuiButton>
        <MuiButton variant={variant} color="warning">
          {label || "Warning"}
        </MuiButton>
        <MuiButton variant={variant} color="error">
          {label || "Error"}
        </MuiButton>
      </Fragment>
    ))}
  </>
);
Colors.decorators = [withGrid(6)];

export const Sizes = ({ label }) => (
  <>
    {["text", "contained", "outlined"].map((variant) => (
      <Fragment key={variant}>
        <MuiButton variant={variant} size="small">
          {label || "Small"}
        </MuiButton>
        <MuiButton variant={variant} size="medium">
          {label || "Medium"}
        </MuiButton>
        <MuiButton variant={variant} size="large">
          {label || "Large"}
        </MuiButton>
      </Fragment>
    ))}
  </>
);
Sizes.decorators = [withGrid(3, "100px")];

export const States = ({ label }) => (
  <>
    {["text", "contained", "outlined"].map((variant) => (
      <Fragment key={variant}>
        <MuiButton variant={variant}>{label || "Normal"}</MuiButton>
        <MuiButton variant={variant} disabled>
          {label || "Disabled"}
        </MuiButton>
        <MuiButton variant={variant} fullWidth>
          {label || "Full width"}
        </MuiButton>
      </Fragment>
    ))}
  </>
);
States.decorators = [withGrid(3, "200px")];
