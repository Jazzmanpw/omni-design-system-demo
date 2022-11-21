import { Link, Typography as MuiTypography } from "@mui/material";

export default {
  title: "Atoms/Typography",
  argTypes: {
    label: { control: "text", description: "Label" },
  },
  args: { label: "" },
};

export const Typography = ({ label, variant, color, align }) => (
  <MuiTypography variant={variant} color={color} align={align}>
    {label || "Typography"}
  </MuiTypography>
);
Typography.argTypes = {
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
Typography.args = { align: "inherit", color: "default" };

export const Variants = ({ label }) => (
  <>
    <MuiTypography variant="h1">{label || "Heading 1"}</MuiTypography>
    <MuiTypography variant="body1">
      {label || "Body 1 (usually of secondary color)"}
    </MuiTypography>
  </>
);

export const Colors = ({ label }) => (
  <>
    <MuiTypography variant="h1" color="textSecondary">
      {label || "Text secondary"}
    </MuiTypography>
    <MuiTypography variant="body1" color="primary">
      {label || "Primary"}
    </MuiTypography>
  </>
);

export const TypographyLink = ({ label }) => (
  <>
    <Link href="#">{label || "This is a link."}</Link>
    <MuiTypography variant="body1">
      And this is <Link href="#">{label || "a link"}</Link> within a text line.
    </MuiTypography>
  </>
);
