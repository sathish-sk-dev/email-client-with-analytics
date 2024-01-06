import { formatDistanceToNowStrict } from "date-fns";

const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  return formatDistanceToNowStrict(date);
};

export { formatTimeAgo };
