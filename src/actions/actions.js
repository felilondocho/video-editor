import { TOGGLE_PLAY, VIDEO_TIME_CHANGE, ADD_VIDEO_DURATION } from './actionTypes';

export const togglePlay = isPlaying => ({ type: TOGGLE_PLAY, isPlaying });
export const videoTimeChange = videoTime => ({ type: VIDEO_TIME_CHANGE, videoTime });
export const addVideoDuration = videoDuration => ({ type: ADD_VIDEO_DURATION, videoDuration });
