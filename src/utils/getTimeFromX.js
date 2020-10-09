import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getTimeFromX = (time) => {
  const now = dayjs();
  const test = dayjs.unix(time);
  const delay = test.from(now);
  return delay;
};
