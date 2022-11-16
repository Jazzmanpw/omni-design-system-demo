import { Box } from "@mui/material";

export const withGrid =
  (columnsCount, columnWidth = "auto") =>
  (Story) =>
    (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${columnsCount}, ${columnWidth})`,
          alignItems: "center",
          justifyItems: "center",
          gap: ({ spacing }) => spacing(1),
        }}
      >
        <Story />
      </Box>
    );
