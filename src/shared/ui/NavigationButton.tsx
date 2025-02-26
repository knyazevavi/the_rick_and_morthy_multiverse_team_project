import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationButton = ({
  title,
  params,
}: {
  title: string;
  params: string;
}) => {
  return (
    <Button
      color="inherit"
      component={Link}
      to={params}
      sx={{
        color: "inherit",
        transition: "background 0.3s ease-in-out, transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          fontWeight: "bold",
        },
      }}
    >
      {title}
    </Button>
  );
};
