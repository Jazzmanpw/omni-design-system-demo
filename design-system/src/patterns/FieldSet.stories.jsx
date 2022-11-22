import { Stack, TextField } from "@mui/material";
import LabeledField from "../components/LabeledField";

export default {
  title: "Organisms/Field Set",
};

export const _FieldSet = () => (
  <Stack component="fieldset" gap={1}>
    <LabeledField label="Field 1">
      <TextField name="field1" />
    </LabeledField>
    <LabeledField label="Field 2">
      <TextField name="field2" />
    </LabeledField>
    <LabeledField label="Field 3">
      <TextField name="field3" />
    </LabeledField>
  </Stack>
);
