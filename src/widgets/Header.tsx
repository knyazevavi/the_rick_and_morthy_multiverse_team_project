import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { signout } from "../store/userSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks.ts";
import { PATH } from "../shared/constants/constants.ts";

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
        <>{isAuthenticated ? <span>Hi {username}</span> : null}</>

        <div>
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
              <Button color="inherit" component={Link} to={PATH.signin}>
                SignIn
              </Button>
              <Button color="inherit" component={Link} to={PATH.signup}>
                SignUp
              </Button>
            </>
          )}

          <Button color="inherit" component={Link} to={PATH.favorites}>
            Favorites
          </Button>
          <Button color="inherit" component={Link} to={PATH.history}>
            History
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
