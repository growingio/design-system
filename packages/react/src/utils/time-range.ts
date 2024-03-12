import dayjs, { type Dayjs } from "dayjs";

const REGEX = /([\w\-]+):(\d+),(\d*)/;

/**
 * Through the time range relative to today, calculate the specific
 * time range (start date and end date).
 *
 * @param timeRange time range
 * @returns start date and end date
 */
export function parseTimeRange(timeRange: string): [Dayjs, Dayjs] {
  const now = dayjs().startOf("day");
  if (!timeRange) return [now, now];

  const matches = timeRange.match(REGEX);
  if (matches.length < 4) {
    throw new Error(`Invalid time range: ${timeRange}`);
  }
  const [_, prefix, startString, endString] = matches;
  const [start, end] = [
    parseInt(startString),
    endString.length === 0 ? 0 : parseInt(endString),
  ];

  switch (prefix) {
    case "abs":
      return [dayjs(start), dayjs(end)];
    case "day":
      return [now.subtract(start, "day"), now.subtract(end, "day")];
    case "since":
      return [dayjs(start), now.subtract(end, "day")];
  }
}

/**
 * Through the period range relative to time range, calculate the specific
 * time range (start date and end date).
 *
 * @param periodRange period range
 * @param timeRange time range
 * @returns start date and end date
 */
export function parsePeriodRange(periodRange: string, timeRange: string) {
  const [currentStart, currentEnd] = parseTimeRange(timeRange);
  if (!periodRange) {
    return [currentStart, currentEnd];
  }

  const duration = currentEnd.diff(currentStart, "day");

  const matches = periodRange.match(REGEX);
  if (matches.length !== 4) {
    throw new Error(`Invalid period range: ${periodRange}`);
  }
  const [_, prefix, startString, endString] = matches;
  const [start, end] = [parseInt(startString), parseInt(endString)];

  switch (prefix) {
    case "period":
      if (start === 2 && end === 1) {
        return [
          currentStart.subtract(duration, "day"),
          currentEnd.subtract(duration, "day"),
        ];
      } else {
        return [currentStart, currentEnd];
      }
    case "abs":
      return [dayjs(start), dayjs(end)];
  }
}
