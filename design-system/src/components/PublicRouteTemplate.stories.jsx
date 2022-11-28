import PublicRouteContainer from "./PublicRouteContainer";
import SectionTitles from "./SectionTitles";
import LabeledField from "./LabeledField";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import PasswordField from "./PasswordField";
import UnorderedList from "./UnorderedList";

export default {
  title: "Templates/Public Route",
};

export const Template = ({ title, subtitle, contentText, footerLink }) => (
  <PublicRouteContainer>
    <SectionTitles title={title || "Title"} subtitle={subtitle} />
    <Box mt={6}>
      {contentText && (
        <Typography variant="subtitle1">
          More of a helper text
          <UnorderedList>
            <UnorderedList.Item>
              It may provide some tips for the fields below
            </UnorderedList.Item>
            <UnorderedList.Item>
              There may be more than one of these
            </UnorderedList.Item>
            <UnorderedList.Item checked success>
              Some of theme may succeed and be checked
            </UnorderedList.Item>
            <UnorderedList.Item>Others will just be grey</UnorderedList.Item>
            <UnorderedList.Item checked>
              You may have a check icon without success color
            </UnorderedList.Item>
          </UnorderedList>
        </Typography>
      )}
      <Stack gap={1} mt={4} mb={5}>
        <LabeledField label="Field 1">
          <PasswordField fullWidth placeholder="Field 1" />
        </LabeledField>
        <LabeledField label="Field 2">
          <PasswordField fullWidth placeholder="Field 2" />
        </LabeledField>
      </Stack>
      <Box display="flex" justifyContent="flex-end">
        <Button size="large">Submit</Button>
      </Box>
      {footerLink && (
        <Typography variant="subtitle1" mt={5}>
          Some text below.
          <Link href="#" ml={1.5}>
            Maybe a link as well
          </Link>
        </Typography>
      )}
    </Box>
  </PublicRouteContainer>
);
Template.args = {
  title: "",
  subtitle: "Subtitle",
  contentText: false,
  footerLink: false,
};

export const LoginPage = ({ hasError }) => (
  <PublicRouteContainer>
    <SectionTitles
      title="Sign in to your workspace:"
      subtitle="storybook.omnihr.co"
    />
    <Box mt={6}>
      <Stack gap={1} mt={4} mb={5}>
        <LabeledField label="Email" preventCenterAlignment>
          <TextField
            fullWidth
            placeholder="Type your email"
            error={hasError}
            helperText={hasError && "Error message"}
          />
        </LabeledField>
        <LabeledField label="Password" preventCenterAlignment>
          <PasswordField
            fullWidth
            placeholder="Type your password"
            error={hasError}
            helperText={hasError && "Error message"}
          />
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
LoginPage.args = { hasError: false };

export const ResetPassword = ({ hasError }) => (
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
        <LabeledField label="Email" preventCenterAlignment>
          <TextField
            fullWidth
            placeholder="Type your email"
            error={hasError}
            helperText={hasError && "Error message"}
          />
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
ResetPassword.args = { hasError: false };

export const SetPassword = ({ hasError }) => (
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
        <LabeledField label="Field 1" preventCenterAlignment>
          <PasswordField
            fullWidth
            placeholder="Field 1"
            defaultValue="Qwerty1"
            error={hasError}
            helperText={hasError && "Error message"}
          />
        </LabeledField>
        <LabeledField label="Field 2" preventCenterAlignment>
          <PasswordField
            fullWidth
            placeholder="Field 2"
            error={hasError}
            helperText={hasError && "Error message"}
          />
        </LabeledField>
      </Stack>
      <Box display="flex" justifyContent="flex-end">
        <Button size="large">Next</Button>
      </Box>
    </Box>
  </PublicRouteContainer>
);
SetPassword.args = { hasError: false };
