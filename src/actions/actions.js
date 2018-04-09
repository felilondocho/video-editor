import { PLAY, STOP, FORWARD, BACKWARD, SEEKBAR_CHANGE, VIDEO_TIME_CHANGE } from './actionTypes';

export const playVideo = () => ({ type: PLAY });
export const pauseVideo = () => ({ type: STOP });
export const advanceVideo = () => ({ type: FORWARD });
export const backVideo = () => ({ type: BACKWARD });
export const seekBarChange = videoTime => ({ type: SEEKBAR_CHANGE, videoTime });
export const videoTimeChange = videoTime => ({ type: VIDEO_TIME_CHANGE, videoTime });

