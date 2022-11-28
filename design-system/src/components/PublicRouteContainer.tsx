import { Box, Paper, styled, SvgIcon } from "@mui/material";
import omniEntry from "../assets/img/omniEntry.svg";
import { ReactComponent as OmniLogo } from "../assets/img/omniLogo.svg";
import { PropsWithChildren } from "react";

console.log({ ...OmniLogo });

const Background = styled("div", {
  name: "OmniPublicRouteContainer-Background",
})(({ theme: { spacing } }) => ({
  position: "relative",
  height: "100vh",
  maxWidth: 1280,
  padding: spacing(7, 12.5),
  margin: "auto",
  backgroundImage: `url(${omniEntry})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "90% 0%",
}));

const EntryPaper = styled(Paper, { name: "OmniPublicRouteContainer-Paper" })(
  ({ theme: { spacing } }) => ({
    width: 550,
    marginTop: spacing(5),
    padding: spacing(9, 4, 11),
  })
);

export default function PublicRouteContainer({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <Background>
      <Box ml={4} width={105}>
        <SvgIcon
          inheritViewBox
          component={OmniLogo}
          sx={{ width: "auto", height: 33 }}
        />
      </Box>
      <EntryPaper>{children}</EntryPaper>
    </Background>
  );
}
