export const formatDate = (date: Date) => {
  return new Date(date)
    .toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-");
};
