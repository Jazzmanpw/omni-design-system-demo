import PublicRouteContainer from "./PublicRouteContainer";
import SectionTitles from "../SectionTitles";
import LabeledField from "../LabeledField";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import PasswordField from "../PasswordField";
import UnorderedList from "../UnorderedList";

export default {
  title: "Templates/Public Route",
};

export const _PublicRoute = ({ title, subtitle, contentText, footerLink }) => (
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
_PublicRoute.args = {
  title: "",
  subtitle: "Subtitle",
  contentText: false,
  footerLink: false,
};
