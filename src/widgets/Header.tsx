import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../hooks.ts";
import { PATH } from "../shared/constants/constants.ts";
import { NavigationButton } from "../shared/ui/NavigationButton";
import { selectUser } from "../store/selectors/userSelectors.ts";
import { signout } from "../store/userSlice.ts";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, username } = useAppSelector(selectUser);

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
            <>
              <NavigationButton title="Search" params={PATH.search} />
              <NavigationButton title="Favorites" params={PATH.favorites} />
              <NavigationButton title="History" params={PATH.history} />
              <NavigationButton
                title="Logout"
                params={PATH.home}
                onClick={handlerClick}
              />
            </>
          ) : (
            <>
              <NavigationButton title="SignIn" params={PATH.signin} />
              <NavigationButton title="SignUp" params={PATH.signup} />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
