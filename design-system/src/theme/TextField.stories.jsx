import { Box, Stack, TextField } from "@mui/material";

export default {
  title: "Molecules/Text Field",
};

export const _TextField = ({ placeholder, helperText, error, fullWidth }) => (
  <TextField
    name="textField"
    placeholder={placeholder || "Text field"}
    helperText={helperText}
    error={error}
    fullWidth={fullWidth}
  />
);
_TextField.args = {
  placeholder: "",
  helperText: "",
  error: false,
  fullWidth: false,
};

export const States = ({ helperText, errorText }) => (
  <Stack gap={2}>
    <Box>
      <TextField name="textField" placeholder="Text field" value="Normal" />
    </Box>
    <Box>
      <TextField
        name="textFieldWithHelperText"
        placeholder="Text field with helper text"
        helperText={helperText || "This field has helper text"}
      />
    </Box>
    <Box>
      <TextField
        name="textFieldWithError"
        placeholder="Text field with error"
        error
        helperText={errorText || "This field is required"}
      />
    </Box>
    <Box>
      <TextField
        name="fullWidthTextField"
        placeholder="Full-width text field"
        fullWidth
      />
    </Box>
  </Stack>
);
States.args = { errorText: "" };
