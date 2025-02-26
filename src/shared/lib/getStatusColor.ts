export const getStatusColor = (status: string) => {
  switch (status) {
    case "Alive":
      return "green";
    case "Dead":
      return "red";
    default:
      return "gray";
  }
};
