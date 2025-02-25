import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { signout } from "../store/userSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks.ts";

export const Header = () => {
  const { isAuthenticated, username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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
        <>
          {isAuthenticated ? (
            <>
              <span>Hi {username}</span>
            </>
          ) : (
            null
          )}
        </>

        <div>
          {isAuthenticated ? (
            <Button
              color="inherit"
              component={Link}
              to="/"
              onClick={() => {
                dispatch(signout());
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="signin">
                SignIn
              </Button>
              <Button color="inherit" component={Link} to="signup">
                SignUp
              </Button>
            </>
          )}

          <Button color="inherit" component={Link} to="favorites">
            Favorites
          </Button>
          <Button color="inherit" component={Link} to="history">
            History
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
