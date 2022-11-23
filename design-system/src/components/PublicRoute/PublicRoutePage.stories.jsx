import PublicRouteContainer from "./PublicRouteContainer";
import SectionTitles from "../SectionTitles";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import LabeledField from "../LabeledField";
import PasswordField from "../PasswordField";
import UnorderedList from "../UnorderedList";

export default {
  title: "Pages/Public Route",
};

export const LoginPage = () => (
  <PublicRouteContainer>
    <SectionTitles
      title="Sign in to your workspace:"
      subtitle="storybook.omnihr.co"
    />
    <Box mt={6}>
      <Stack gap={1} mt={4} mb={5}>
        <LabeledField label="Email">
          <TextField fullWidth placeholder="Type your email" />
        </LabeledField>
        <LabeledField label="Password">
          <PasswordField fullWidth placeholder="Type your password" />
        </LabeledField>
      </Stack>
      <Box display="flex" justifyContent="flex-end">
        <Button size="large">Sign in</Button>
      </Box>
      <Typography variant="subtitle1" mt={5}>
        Forgot your password?
        <Link href="#" ml={1.5}>
          Reset password
        </Link>
      </Typography>
    </Box>
  </PublicRouteContainer>
);

export const ResetPassword = () => (
  <PublicRouteContainer>
    <SectionTitles
      title="Reset password"
      subtitle={
        "Enter the email associated with your account.\n" +
        "We will send you a link to reset your password."
      }
    />
    <Box mt={6}>
      <Stack gap={1} mt={4} mb={5}>
        <LabeledField label="Email">
          <TextField fullWidth placeholder="Type your email" />
        </LabeledField>
        <Link href="#" alignSelf="flex-end">
          Return to login
        </Link>
      </Stack>
      <Box display="flex" justifyContent="flex-end">
        <Button size="large">Send</Button>
      </Box>
    </Box>
  </PublicRouteContainer>
);

export const SetPassword = () => (
  <PublicRouteContainer>
    <SectionTitles
      title="New Password:"
      subtitle="Please enter a new password"
    />
    <Box mt={6}>
      <Typography variant="subtitle1">
        Password criteria:
        <UnorderedList>
          <UnorderedList.Item checked success>
            At least 1 uppercase character
          </UnorderedList.Item>
          <UnorderedList.Item checked success>
            At least 1 lowercase character
          </UnorderedList.Item>
          <UnorderedList.Item checked success>
            At least 1 digit
          </UnorderedList.Item>
          <UnorderedList.Item>At least 8 characters</UnorderedList.Item>
          <UnorderedList.Item>
            The 2 input passwords must match
          </UnorderedList.Item>
        </UnorderedList>
      </Typography>
      <Stack gap={1} mt={4} mb={5}>
        <LabeledField label="Field 1">
          <PasswordField
            fullWidth
            placeholder="Field 1"
            defaultValue="Qwerty1"
          />
        </LabeledField>
        <LabeledField label="Field 2">
          <PasswordField fullWidth placeholder="Field 2" />
        </LabeledField>
      </Stack>
      <Box display="flex" justifyContent="flex-end">
        <Button size="large">Next</Button>
      </Box>
    </Box>
  </PublicRouteContainer>
);
