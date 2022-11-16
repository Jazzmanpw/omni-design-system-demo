import { Link, Typography } from "@mui/material";

export default {
  title: "Atoms/Typography",
  argTypes: {
    label: { control: "text", description: "Label" },
  },
  args: { label: "" },
};

export const Variants = ({ label }) => (
  <>
    <Typography variant="h1">{label || "Heading 1"}</Typography>
    <Typography variant="body1">
      {label || "Body 1 (usually of secondary color)"}
    </Typography>
  </>
);

export const Colors = ({ label }) => (
  <>
    <Typography variant="h1" color="textSecondary">
      {label || "Text secondary"}
    </Typography>
    <Typography variant="body1" color="primary">
      {label || "Primary"}
    </Typography>
  </>
);

export const TypographyLink = ({ label }) => (
  <>
    <Link href="#">{label || "This is a link."}</Link>
    <Typography variant="body1">
      And this is <Link href="#">{label || "a link"}</Link> within a text line.
    </Typography>
  </>
);
