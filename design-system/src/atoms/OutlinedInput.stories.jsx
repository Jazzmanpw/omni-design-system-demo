import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { VisibilityOutlined } from "@mui/icons-material";

const adornments = ["text", "icon", "none"];

export default {
  title: "Atoms/Outlined Input",
};

export const SimpleInput = ({ value }) => (
  <div>
    <div>
      Uncontrolled input <OutlinedInput />
    </div>
    <div>
      Controlled input (by the <em>Value</em> control){" "}
      <OutlinedInput value={value} />
    </div>
  </div>
);
SimpleInput.argTypes = {
  value: { control: "text", description: "Input value" },
};
SimpleInput.args = { value: "" };

export const StartAdornment = ({ adornment }) => (
  <OutlinedInput
    startAdornment={
      <InputAdornment position="start">{adornment}</InputAdornment>
    }
  />
);
StartAdornment.argTypes = {
  adornment: {
    control: "select",
    options: adornments,
    type: { required: true },
    mapping: {
      text: "$",
      icon: (
        <IconButton edge="start">
          <VisibilityOutlined />
        </IconButton>
      ),
      none: null,
    },
  },
};
StartAdornment.args = { adornment: adornments[0] };

export const EndAdornment = ({ adornment }) => (
  <OutlinedInput
    endAdornment={<InputAdornment position="end">{adornment}</InputAdornment>}
  />
);
EndAdornment.argTypes = {
  adornment: {
    control: "select",
    options: adornments,
    type: { required: true },
    mapping: {
      text: "$",
      icon: (
        <IconButton edge="end">
          <VisibilityOutlined />
        </IconButton>
      ),
      none: null,
    },
  },
};
EndAdornment.args = { adornment: adornments[0] };
