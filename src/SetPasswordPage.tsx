import {
  LabeledField,
  PasswordField,
  SectionTitles,
  UnorderedList,
} from "../design-system/";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import { useHistory } from "react-router";
import { DeepPartial, UnpackNestedValue } from "react-hook-form/dist/types";
type NewPasswordData = {
  password: string;
  confirm: string;
};

const getCheckpoints = ({
  password = "",
  confirm = "",
}: UnpackNestedValue<DeepPartial<NewPasswordData>>) => [
  {
    text: "At least 1 uppercase character",
    isValid: /[A-Z]/.test(password),
  },
  {
    text: "At least 1 lowercase character",
    isValid: /[a-z]/.test(password),
  },
  { text: "At least 1 digit", isValid: /\d/.test(password) },
  { text: "At least 8 characters", isValid: password.length > 7 },
  {
    text: "The 2 input passwords must match",
    isValid: Boolean(password && password === confirm),
  },
];

export default function SetPasswordPage() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const email = params.get("email");

  const isPasswordReset = !email;
  const { register, errors, control, handleSubmit, setError } = useForm({
    defaultValues: { password: "", confirm: "" },
  });
  const checkpoints = getCheckpoints(useWatch({ control }));
  return (
    <>
      <SectionTitles
        title={
          isPasswordReset
            ? "New Password:"
            : `Welcome! Let's first create an account`
        }
        subtitle={
          isPasswordReset
            ? "Please enter a new password"
            : "Please set up the password for your account."
        }
      />
      <Box
        component="form"
        onSubmit={handleSubmit((data) => {
          if (email === "expire-link") {
            setError("confirm", {
              type: "manual",
              message: "Your link is expired",
            });
          } else {
            console.log(data);
          }
        })}
        mt={6}
      >
        <Typography variant="subtitle1">
          Password criteria:
          <UnorderedList>
            {checkpoints.map(({ text, isValid }) => (
              <UnorderedList.Item
                key={text}
                checked={isValid}
                success={isValid}
              >
                {text}
              </UnorderedList.Item>
            ))}
          </UnorderedList>
        </Typography>
        <Stack gap={1} mt={4} mb={5}>
          {email && <LabeledField label="Email">{email}</LabeledField>}
          <LabeledField label="New password">
            <PasswordField
              name="password"
              inputRef={register}
              fullWidth
              placeholder="************"
              defaultValue=""
            />
          </LabeledField>
          <LabeledField label="Confirm password" preventCenterAlignment>
            <PasswordField
              name="confirm"
              inputRef={register}
              fullWidth
              placeholder="************"
              error={Boolean(errors.confirm)}
              helperText={errors.confirm?.message}
            />
          </LabeledField>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <Button
            size="large"
            disabled={!checkpoints.every((v) => v.isValid)}
            type="submit"
          >
            {isPasswordReset ? "Next" : "Create"}
          </Button>
        </Box>
      </Box>
    </>
  );
}
