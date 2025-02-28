import { Box, Typography, Link, Button } from "@mui/material";

import { shareTelegramLink } from "../shared/constants/constants.ts";
import { useFeatureFlags } from "../utils/featureFlag.ts";

export const Footer = () => {
  const context = useFeatureFlags();
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        mt: 10,
        color: "white",
        borderTop: "4px solid #1e1e2f",
        bgcolor: "#474f63",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} The Rick and Morty Multiverse
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 1,
          color: "#ffcc00",
        }}
      >
        <Link href="/" color="inherit" underline="hover">
          Home
        </Link>
        <Link href="/search" color="inherit" underline="hover">
          Characters
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Dimensions
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Episodes
        </Link>
      </Box>
      {context.featureSharedLinkByTelegram ? (
        <Button href={shareTelegramLink}>Share Telegram</Button>
      ) : null}
    </Box>
  );
};
