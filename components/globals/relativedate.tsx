// not using this at the moment

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";


interface RelativeDateProps {
  prefix: string;
  date: Date | null;
}

export const RelativeDate = ({ prefix, date }: RelativeDateProps) => {

  dayjs.extend(timezone);
  dayjs.extend(utc);
  dayjs.extend(localizedFormat);
  dayjs.extend(advancedFormat);
  dayjs.extend(relativeTime);

  let formattedTimestamp: string;
  let relativeTimeInWords: string;

  if (date === null) {
    formattedTimestamp = "";
    relativeTimeInWords = "at some point";
  } else {
    formattedTimestamp = dayjs(date).format("LLLL z");
    relativeTimeInWords = dayjs(date).fromNow();
  }

  return (
    <div>
      <small>
        {prefix}{" "}
        <time className="text-blue-500 font-bold" dateTime={dayjs(date).format()} title={formattedTimestamp}>
          {relativeTimeInWords}
        </time>
      </small>
    </div>
  );
};
