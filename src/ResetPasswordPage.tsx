import { useForm } from "react-hook-form";
import { LabeledField, SectionTitles } from "../design-system";
import { Box, Button, Link as MuiLink, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  const { register, handleSubmit } = useForm({ defaultValues: { email: "" } });

  return (
    <>
      <SectionTitles
        title="Reset password"
        subtitle={
          "Enter the email associated with your account.\n" +
          "We will send you a link to reset your password."
        }
      />
      <Box component="form" onSubmit={handleSubmit(console.log)} mt={6}>
        <Stack gap={1} mt={4} mb={5}>
          <LabeledField label="Email">
            <TextField
              type="email"
              name="email"
              inputRef={register}
              fullWidth
              placeholder="Type your email"
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
