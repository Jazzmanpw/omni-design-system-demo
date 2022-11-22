import { TextField } from "@mui/material";

export default {
  title: "Molecules/Text Field",
};

export const _TextField = ({ label, placeholder, value }) => {
  const labelOrDefault = label || "Text field";
  return (
    <TextField
      name="textField"
      placeholder={placeholder || labelOrDefault}
      value={value}
    />
  );
};
_TextField.args = {
  label: "",
  placeholder: "",
  value: "",
};
