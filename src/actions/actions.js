import { TOGGLE_PLAY, VIDEO_TIME_CHANGE, ADD_VIDEO_DURATION, ADD_CLIP } from './actionTypes';

export const togglePlay = isPlaying => ({ type: TOGGLE_PLAY, isPlaying });
export const videoTimeChange = videoTime => ({ type: VIDEO_TIME_CHANGE, videoTime });
export const addVideoDuration = videoDuration => ({ type: ADD_VIDEO_DURATION, videoDuration });
export const addClip = (clipName, startTime, endTime) =>
  ({ type: ADD_CLIP, clip: { name: clipName, startTime, endTime } });
