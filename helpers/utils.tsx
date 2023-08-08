export function unixToHumanReadable(
  unixTimestamp: number,
  timezoneOffsetSeconds: number
): string {
  // Convert UNIX timestamp to UTC Date
  const utcDate = new Date(unixTimestamp * 1000);

  // Create a new Date representing the time in the target timezone
  const targetTimezoneDate = new Date(
    utcDate.getUTCFullYear(),
    utcDate.getUTCMonth(),
    utcDate.getUTCDate(),
    utcDate.getUTCHours(),
    utcDate.getUTCMinutes(),
    utcDate.getUTCSeconds() + timezoneOffsetSeconds
  );

  return targetTimezoneDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function getCurrentTime(timezoneOffsetSeconds: number): string {
  const currentUTCDate = new Date();

  // Create a new Date representing the current time in the target timezone
  const targetTimezoneDate = new Date(
    currentUTCDate.getUTCFullYear(),
    currentUTCDate.getUTCMonth(),
    currentUTCDate.getUTCDate(),
    currentUTCDate.getUTCHours(),
    currentUTCDate.getUTCMinutes(),
    currentUTCDate.getUTCSeconds() + timezoneOffsetSeconds
  );

  return targetTimezoneDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
