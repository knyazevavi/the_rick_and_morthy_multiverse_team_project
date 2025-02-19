import { Outlet } from "react-router-dom";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1, p: 3 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
