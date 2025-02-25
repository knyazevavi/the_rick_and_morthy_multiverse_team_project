import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PATH } from "../shared/constants/constants.ts";

const PageError = () => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(PATH.home);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#31394b",
      }}
    >
      <Typography variant="h1" sx={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={handlerClick}>
        Back Home
      </Button>
    </Box>
  );
};

export default PageError;
