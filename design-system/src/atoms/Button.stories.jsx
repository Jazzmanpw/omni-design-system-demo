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

export const _Button = ({ label, variant, size, state }) => (
  <Button variant={variant} size={size} disabled={state.includes("disabled")}>
    {label || "Button"}
  </Button>
);
_Button.argTypes = {
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
_Button.args = {
  size: "default",
  variant: "default",
  state: [],
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
