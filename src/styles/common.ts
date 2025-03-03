export const paginationButtonStyles = {
  width: "200px",
  minWidth: "120px",
  margin: "0 20px",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "10px",
  backgroundColor: "rgb(149, 151, 154)",
  color: "white",
  textTransform: "none",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgb(187, 191, 199)",
  },
  "&:disabled": {
    backgroundColor: "rgb(200, 200, 200)",
    color: "rgb(100, 100, 100)",
    cursor: "not-allowed",
  },
};
