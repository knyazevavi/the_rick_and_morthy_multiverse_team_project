import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
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
        <div>
          <Button color="inherit" component={Link} to="#">
            SignIn
          </Button>
          <Button color="inherit" component={Link} to="#">
            Favorites
          </Button>
          <Button color="inherit" component={Link} to="#">
            History
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
