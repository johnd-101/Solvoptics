export function formatDate(
  date: Date | string | null | undefined
): string {

  if (!date) {
    return "";
  }


  const formattedDate = new Date(date);


  return formattedDate.toLocaleDateString(
    "en-ZA",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

}



export function formatDateTime(
  date: Date | string | null | undefined
): string {

  if (!date) {
    return "";
  }


  const formattedDate = new Date(date);


  return formattedDate.toLocaleString(
    "en-ZA",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

}