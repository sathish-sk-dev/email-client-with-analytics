import { formatDistanceToNowStrict } from "date-fns";

const formatTimeAgo = (dateString: string, addSuffix: boolean): string => {
  const date = new Date(dateString);
  return formatDistanceToNowStrict(date, { addSuffix });
};

export { formatTimeAgo };
