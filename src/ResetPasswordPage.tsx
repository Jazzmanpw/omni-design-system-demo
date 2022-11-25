import { useForm } from "react-hook-form";
import { LabeledField, SectionTitles } from "../design-system";
import { Box, Button, Link as MuiLink, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ResetPasswordPage() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { email: "" },
    resolver: yupResolver(
      yup.object({
        email: yup
          .string()
          .email("Invalid email format")
          .required("This field is required"),
      })
    ),
  });

  return (
    <>
      <SectionTitles
        title="Reset password"
        subtitle={
          "Enter the email associated with your account.\n" +
          "We will send you a link to reset your password."
        }
      />
      <Box
        component="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        noValidate
        mt={6}
      >
        <Stack gap={1} mt={4} mb={5}>
          <LabeledField label="Email" preventCenterAlignment>
            <TextField
              type="email"
              name="email"
              inputRef={register({ validate: () => false })}
              fullWidth
              placeholder="Type your email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          </LabeledField>
          <MuiLink
            variant="subtitle1"
            component={Link}
            to="/auth/login/"
            alignSelf="flex-end"
          >
            Return to login
          </MuiLink>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <Button size="large" type="submit">
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
}
