import { Link, Typography as Typography } from "@mui/material";

export default {
  title: "Atoms/Typography",
  argTypes: {
    label: { control: "text", description: "Label" },
  },
  args: { label: "" },
};

export const _Typography = ({ label, variant, color, align }) => (
  <Typography variant={variant} color={color} align={align}>
    {label || "Typography"}
  </Typography>
);
_Typography.argTypes = {
  variant: {
    control: "select",
    options: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "body1",
      "body2",
      "subtitle1",
      "subtitle2",
      "button",
      "caption",
      "overline",
    ],
  },
  color: {
    control: "select",
    options: [
      "default",
      "inherit",
      "textPrimary",
      "textSecondary",
      "primary",
      "secondary",
      "info.main",
      "success.main",
      "warning.main",
      "error.main",
    ],
    mapping: { default: undefined },
  },
  align: {
    control: "inline-radio",
    options: ["center", "inherit", "justify", "left", "right"],
  },
};
_Typography.args = { align: "inherit", color: "default" };

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
