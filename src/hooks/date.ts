import { format } from "@formkit/tempo";

export const formatDate = (date: Date) => {
  return format({
    date: new Date(date),
    format: "full",
    tz: "Pacific/Chatham",
  });
};
