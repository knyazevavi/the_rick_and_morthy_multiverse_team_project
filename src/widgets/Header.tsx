import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationButton } from "../shared/ui/NavigationButton";
import logo from "../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../hooks.ts";
import { PATH } from "../shared/constants/constants.ts";
import { signout } from "../store/userSlice.ts";

export const Header = () => {
  const { isAuthenticated, username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(signout());
  };

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
          to={PATH.home}
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img src={logo} alt="Rick and Morty Logo" width="80" height="70" />
        </Typography>
        {isAuthenticated ? <span>Hi {username}</span> : null}
        <Box>
          {isAuthenticated ? (
            <Button
              color="inherit"
              component={Link}
              to={PATH.home}
              onClick={handlerClick}
            >
              Logout
            </Button>
          ) : (
            <>
              <NavigationButton title="SignIn" params={PATH.signin} />
              <NavigationButton title="Search" params="/search" />
              <Button color="inherit" component={Link} to={PATH.signup}>
                SignUp
              </Button>
            </>
          )}
          <NavigationButton title="Favorites" params={PATH.favorites} />
          <NavigationButton title="History" params={PATH.history} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
