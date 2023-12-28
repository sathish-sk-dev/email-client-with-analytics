import { formatDistanceToNow } from "date-fns";

const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};

export { formatTimeAgo };
