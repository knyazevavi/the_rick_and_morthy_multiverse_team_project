import { Button, Box, Typography } from "@mui/material";
import { PaginationButtonType } from "../types/types";
import { paginationButtonStyles } from "../../styles/common";

export const PaginationButton = ({
  setPage,
  pageNumber,
  totalPages,
}: PaginationButtonType) => {
  const handleNextPage = () => {
    if (pageNumber < totalPages) {
      setPage(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPage(pageNumber - 1);
    }
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
      <Button
        onClick={handlePrevPage}
        disabled={pageNumber === 1}
        sx={paginationButtonStyles}
      >
        Previous Page
      </Button>
      <Typography
        sx={{
          mt: "10px",
          fontSize: "18px",
          color: "rgb(149, 151, 154)",
        }}
      >
        Page {pageNumber}
      </Typography>
      <Button
        onClick={handleNextPage}
        disabled={pageNumber >= totalPages}
        sx={paginationButtonStyles}
      >
        Next Page
      </Button>
    </Box>
  );
};
