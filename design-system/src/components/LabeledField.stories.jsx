import LabeledField from "./LabeledField";
import { Stack, TextField, Typography } from "@mui/material";

export default {
  title: "Molecules/Labeled Field",
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
_LabeledField.argTypes = {
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
};
_LabeledField.args = {
  label: "",
  labelWidth: 200,
  content: "text",
  preventCenterAlignment: false,
};

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

export const Widths = ({ label, content, preventCenterAlignment }) => (
  <Stack gap={2} width={700}>
    <LabeledField
      label={label || "Default label width"}
      preventCenterAlignment={preventCenterAlignment}
    >
      {content}
    </LabeledField>
    <LabeledField
      label={label || "Shorter label"}
      preventCenterAlignment={preventCenterAlignment}
      labelWidth={100}
    >
      {content}
    </LabeledField>
    <LabeledField
      label={label || "Longer label"}
      preventCenterAlignment={preventCenterAlignment}
      labelWidth={250}
    >
      {content}
    </LabeledField>
    <LabeledField
      label={label || "Very long label"}
      preventCenterAlignment={preventCenterAlignment}
      labelWidth={400}
    >
      {content}
    </LabeledField>
  </Stack>
);
Widths.argTypes = {
  content: _LabeledField.argTypes.content,
};
Widths.args = {
  content: _LabeledField.args.content,
  preventCenterAlignment: _LabeledField.args.preventCenterAlignment,
};

export const WrappedLabels = ({
  labelWidth,
  content,
  preventCenterAlignment,
}) => (
  <Stack gap={2} width={700}>
    <LabeledField
      label="Short label"
      labelWidth={labelWidth}
      preventCenterAlignment={preventCenterAlignment}
    >
      {content}
    </LabeledField>
    <LabeledField
      label="Longer label that may wrap on small widths"
      labelWidth={labelWidth}
      preventCenterAlignment={preventCenterAlignment}
    >
      {content}
    </LabeledField>
    <LabeledField
      label="Extremely long label that may even take up three lines so I don't even know how we're going to handle it"
      labelWidth={labelWidth}
      preventCenterAlignment={preventCenterAlignment}
    >
      {content}
    </LabeledField>
  </Stack>
);
WrappedLabels.argTypes = {
  labelWidth: _LabeledField.argTypes.labelWidth,
  content: _LabeledField.argTypes.content,
};
WrappedLabels.args = {
  labelWidth: _LabeledField.args.labelWidth,
  content: _LabeledField.args.content,
  preventCenterAlignment: _LabeledField.args.preventCenterAlignment,
};
