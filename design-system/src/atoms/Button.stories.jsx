import { Fragment } from "react";
import { Box, Button as MuiButton } from "@mui/material";
import { withGrid } from "./decorators";

export default {
  title: "Atoms/Button",
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
  >
    {label || "Button"}
  </MuiButton>
);
Button.argTypes = {
  size: {
    control: "inline-radio",
    description: "Button size",
    options: ["default", "medium"],
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
    options: ["disabled"],
  },
};
Button.args = {
  size: "default",
  variant: "default",
  state: [],
};

export const Variants = ({ label }) => (
  <Box sx={{ display: "flex", gap: ({ spacing }) => spacing(1) }}>
    <MuiButton variant="contained">{label || "Contained"}</MuiButton>
  </Box>
);

export const Colors = ({ label }) => (
  <>
    {["contained"].map((variant) => (
      <Fragment key={variant}>
        <MuiButton variant={variant} color="primary">
          {label || "Primary"}
        </MuiButton>
      </Fragment>
    ))}
  </>
);
Colors.decorators = [withGrid(1, "100px")];

export const Sizes = ({ label }) => (
  <>
    {["contained"].map((variant) => (
      <Fragment key={variant}>
        <MuiButton variant={variant} size="medium">
          {label || "Medium"}
        </MuiButton>
      </Fragment>
    ))}
  </>
);
Sizes.decorators = [withGrid(2, "100px")];

export const States = ({ label }) => (
  <>
    {["contained"].map((variant) => (
      <Fragment key={variant}>
        <MuiButton variant={variant}>{label || "Normal"}</MuiButton>
        <MuiButton variant={variant} disabled>
          {label || "Disabled"}
        </MuiButton>
      </Fragment>
    ))}
  </>
);
States.decorators = [withGrid(2, "200px")];
