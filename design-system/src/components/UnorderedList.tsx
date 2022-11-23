import { styled, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { Check } from "@mui/icons-material";

const UnorderedListStyled = styled(Typography, { name: "UnorderedList" })(
  ({ theme: { spacing } }) => ({
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    columnGap: spacing(1),
  })
);

const Item = ({
  children,
  checked,
  success,
}: PropsWithChildren<{ checked?: boolean; success?: boolean }>) => (
  <>
    <Typography
      component="span"
      variant="inherit"
      textAlign="center"
      color={success ? "success.main" : "inherit"}
    >
      {checked ? (
        <Check fontSize="inherit" sx={{ verticalAlign: "text-bottom" }} />
      ) : (
        "•"
      )}
    </Typography>
    <Typography
      component="span"
      variant="inherit"
      color={success ? "success.main" : "inherit"}
    >
      {children}
    </Typography>
  </>
);

const UnorderedList = UnorderedListStyled as typeof UnorderedListStyled & {
  Item: typeof Item;
};
UnorderedList.Item = Item;

export default UnorderedList;
