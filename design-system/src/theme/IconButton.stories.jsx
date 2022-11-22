import IconStories from "./Icons.stories";
import { IconButton, Stack, Typography } from "@mui/material";

export default {
  title: "Atoms/Icon Button",
  argTypes: {
    icon: IconStories.argTypes.icon,
    color: {
      control: "select",
      options: [
        "inherit",
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    icon: IconStories.args.icon,
    color: "default",
    disabled: false,
    size: "medium",
  },
};

export const _IconButton = ({ icon: Component, color, disabled, size }) => (
  <IconButton color={color} disabled={disabled} size={size}>
    <Component />
  </IconButton>
);

export const States = ({ icon: Component, color, size }) => (
  <Stack direction="row" gap={2}>
    <Stack>
      <IconButton color={color} size={size}>
        <Component />
      </IconButton>
      <Typography>Normal</Typography>
    </Stack>
    <Stack>
      <IconButton color={color} size={size} disabled>
        <Component />
      </IconButton>
      <Typography>Disabled</Typography>
    </Stack>
  </Stack>
);
States.argTypes = { disabled: { table: { disable: true } } };

export const Sizes = ({ icon: Component, color, disabled }) => (
  <Stack direction="row" gap={2}>
    <Stack>
      <IconButton color={color} disabled={disabled}>
        <Component />
      </IconButton>
      <Typography>Default</Typography>
    </Stack>
    <Stack>
      <IconButton color={color} disabled={disabled} size="small">
        <Component />
      </IconButton>
      <Typography>Small</Typography>
    </Stack>
    <Stack>
      <IconButton color={color} disabled={disabled} size="medium">
        <Component />
      </IconButton>
      <Typography>Medium</Typography>
    </Stack>
    <Stack>
      <IconButton color={color} disabled={disabled} size="large">
        <Component />
      </IconButton>
      <Typography>Large</Typography>
    </Stack>
  </Stack>
);
