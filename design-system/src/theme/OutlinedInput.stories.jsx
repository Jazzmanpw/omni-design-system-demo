import { Box, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { VisibilityOutlined } from "@mui/icons-material";

const adornments = ["text", "icon", "none"];

const adornmentArgType = (icon) => ({
  control: "inline-radio",
  options: adornments,
  mapping: {
    text: "$",
    icon,
    none: null,
  },
});

const startAdornmentArgType = adornmentArgType(
  <IconButton edge="start">
    <VisibilityOutlined />
  </IconButton>
);

const endAdornmentArgType = adornmentArgType(
  <IconButton edge="end">
    <VisibilityOutlined />
  </IconButton>
);

export default {
  title: "Atoms/Outlined Input",
};

export const SimpleInput = ({ startAdornment, endAdornment }) => (
  <OutlinedInput
    startAdornment={
      startAdornment && (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      )
    }
    endAdornment={
      endAdornment && (
        <InputAdornment position="end">{endAdornment}</InputAdornment>
      )
    }
  />
);
SimpleInput.argTypes = {
  startAdornment: startAdornmentArgType,
  endAdornment: endAdornmentArgType,
};
SimpleInput.args = { startAdornment: "none", endAdornment: "none" };

export const StartAdornment = () => (
  <Box>
    <Box>
      <OutlinedInput
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </Box>
    <Box>
      <OutlinedInput
        startAdornment={
          <InputAdornment position="start">
            <IconButton edge="start">
              <VisibilityOutlined />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  </Box>
);

export const EndAdornment = () => (
  <Box>
    <Box>
      <OutlinedInput
        endAdornment={<InputAdornment position="end">$</InputAdornment>}
      />
    </Box>
    <Box>
      <OutlinedInput
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <VisibilityOutlined />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  </Box>
);
