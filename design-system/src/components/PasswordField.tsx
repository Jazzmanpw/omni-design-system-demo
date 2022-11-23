import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type PasswordFieldProps = Omit<TextFieldProps, "type" | "InputProps"> & {
  InputProps?: Omit<TextFieldProps["InputProps"], "endAdornment">;
};

export default function PasswordField({
  InputProps,
  ...rest
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      {...rest}
      type={showPassword ? "text" : "password"}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => setShowPassword((v) => !v)}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>{" "}
          </InputAdornment>
        ),
      }}
    />
  );
}
