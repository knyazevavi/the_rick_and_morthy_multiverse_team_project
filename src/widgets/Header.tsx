import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationButton } from "../shared/ui/NavigationButton";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "4px solid #1e1e2f",
          bgcolor: "#474f63",
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img src={logo} alt="Rick and Morty Logo" width="80" height="70" />
        </Typography>
        <Box>
          <NavigationButton title="SignIn" params="#" />
          <NavigationButton title="Search" params="/search" />
          <NavigationButton title="Favorites" params="#" />
          <NavigationButton title="History" params="#" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
