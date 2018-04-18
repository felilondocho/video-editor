export function remainingTime(currentTime, videoDuration) {
  const timeDif = Math.round(videoDuration - currentTime);
  const minutes = timeDif / 60 > 9 ? (
    Math.round(timeDif / 60)
  ) : (
    `0${Math.round(timeDif / 60)}`
  );
  const seconds = timeDif > 9 ? (
    Math.round(timeDif)
  ) : (
    `0${Math.round(timeDif)}`
  );
  return `${minutes}:${seconds}`;
}

export function currentTimeDisplay(videoTime) {
  const minutes = Math.round(videoTime / 60) > 9 ? (
    Math.round(videoTime / 60)
  ) : (
    `0${Math.round(videoTime / 60)}`
  );
  const seconds = Math.round(videoTime) > 9 ? (
    Math.round(videoTime)
  ) : (
    `0${Math.round(videoTime)}`
  );
  return `${minutes}:${seconds}`;
}
