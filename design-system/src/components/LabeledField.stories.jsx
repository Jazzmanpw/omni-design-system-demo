import LabeledField from "./LabeledField";
import { Stack, TextField, Typography } from "@mui/material";

export default {
  title: "Atoms/Labeled Field",
  argTypes: {
    labelWidth: { control: { type: "range", min: 150, max: 500, step: 10 } },
    content: {
      control: "inline-radio",
      options: ["text", "multiline text", "input", "input with helper text"],
      mapping: {
        text: <Typography>Labeled field value</Typography>,
        "multiline text": (
          <Typography whiteSpace="pre-wrap">
            This is some text{"\n"}that doesn't fit{"\n"}on a single line
          </Typography>
        ),
        input: <TextField />,
        "input with helper text": <TextField helperText="Some text" />,
      },
    },
  },
  args: {
    label: "",
    labelWidth: 200,
    content: "text",
    preventCenterAlignment: false,
  },
};

export const _LabeledField = ({
  content,
  label,
  labelWidth,
  preventCenterAlignment,
}) => (
  <LabeledField
    label={label || "Labeled field"}
    labelWidth={labelWidth}
    preventCenterAlignment={preventCenterAlignment}
  >
    {content}
  </LabeledField>
);

export const Values = ({ label }) => (
  <Stack gap={2}>
    <LabeledField label={label || "Short text"}>
      <Typography>Some short value here</Typography>
    </LabeledField>
    <LabeledField label={label || "Longer text"}>
      <Typography sx={{ whiteSpace: "pre-wrap" }}>
        This is some text{"\n"}that doesn't fit{"\n"}on a single line
      </Typography>
    </LabeledField>
  </Stack>
);

export const Fields = ({ label }) => (
  <Stack gap={2}>
    <LabeledField label={label || "Short text"} preventCenterAlignment>
      <TextField />
    </LabeledField>
    <LabeledField label={label || "Longer text"} preventCenterAlignment>
      <TextField error helperText="This field is required" />
    </LabeledField>
  </Stack>
);

export const Widths = ({ label }) => (
  <Stack gap={2} width={700}>
    <LabeledField label={label || "Default label width"}>
      <Typography>Some value</Typography>
    </LabeledField>
    <LabeledField label={label || "Shorter label"} labelWidth={100}>
      <Typography>Some value</Typography>
    </LabeledField>
    <LabeledField label={label || "Longer label"} labelWidth={250}>
      <Typography>Some value</Typography>
    </LabeledField>
    <LabeledField label={label || "Very long label"} labelWidth={400}>
      <Typography>Some value</Typography>
    </LabeledField>
  </Stack>
);
