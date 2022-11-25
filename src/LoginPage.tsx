import { useForm, useWatch } from "react-hook-form";
import { LabeledField, PasswordField, SectionTitles } from "../design-system";
import {
  Box,
  Button,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const { register, handleSubmit, control, errors, setError } = useForm({
    defaultValues: { username: "", password: "" },
  });
  const formData = useWatch({ control });

  return (
    <>
      <SectionTitles
        title="Sign in to your workspace:"
        subtitle="storybook.omnihr.co"
      />
      <Box
        mt={6}
        component="form"
        onSubmit={handleSubmit((data) => {
          if (data.password === "wrongpass") {
            setError("username", { type: "manual" });
            setError("password", {
              type: "manual",
              message: "You have entered an invalid email or password.",
            });
          } else {
            console.log(data);
          }
        })}
      >
        <Stack gap={1} mt={4} mb={5}>
          <LabeledField label="Email" preventCenterAlignment>
            <TextField
              name="username"
              inputRef={register}
              fullWidth
              placeholder="Type your email"
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
            />
          </LabeledField>
          <LabeledField label="Password" preventCenterAlignment>
            <PasswordField
              name="password"
              inputRef={register}
              fullWidth
              placeholder="Type your password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          </LabeledField>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <Button
            size="large"
            disabled={!(formData.username && formData.password)}
            type="submit"
          >
            Sign in
          </Button>
        </Box>
        <Typography variant="subtitle1" mt={5}>
          Forgot your password?
          <MuiLink component={Link} to="/auth/reset-password/" ml={1.5}>
            Reset password
          </MuiLink>
        </Typography>
      </Box>
    </>
  );
}
