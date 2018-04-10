import { TOGGLE_PLAY, VIDEO_TIME_CHANGE } from './actionTypes';

export const togglePlay = isPlaying => ({ type: TOGGLE_PLAY, isPlaying });
export const videoTimeChange = videoTime => ({ type: VIDEO_TIME_CHANGE, videoTime });
