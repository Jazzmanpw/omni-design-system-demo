import { PropsWithChildren } from "react";
import { Stack, Typography } from "@mui/material";

type LabeledFieldProps = {
  label: string;
  labelWidth?: number;
  preventCenterAlignment?: boolean;
};

export default function LabeledField({
  label,
  labelWidth = 149,
  preventCenterAlignment,
  children,
}: PropsWithChildren<LabeledFieldProps>) {
  return (
    <Stack
      direction="row"
      alignItems={preventCenterAlignment ? undefined : "center"}
      gap={2}
    >
      <Typography
        variant="fieldLabel"
        py={1.5}
        sx={{ flex: `${labelWidth}px 0 0` }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
}
