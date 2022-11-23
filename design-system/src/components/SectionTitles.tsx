import { Box, Typography } from "@mui/material";

type SectionTitlesProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitles({ title, subtitle }: SectionTitlesProps) {
  return (
    <Box>
      <Typography variant="h1">{title}</Typography>
      {subtitle && (
        <Typography variant="subtitle1" mt={1.5} whiteSpace="pre-wrap">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
