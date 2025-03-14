export const getStatusColor = (status: string) => {
  switch (status) {
    case "Alive":
      return "rgb(85, 204, 68)";
    case "Dead":
      return "rgb(214, 61, 46)";
    default:
      return "gray";
  }
};
