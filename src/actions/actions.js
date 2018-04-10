import { PLAY, STOP, VIDEO_TIME_CHANGE } from './actionTypes';

export const playVideo = () => ({ type: PLAY });
export const pauseVideo = () => ({ type: STOP });
export const videoTimeChange = videoTime => ({ type: VIDEO_TIME_CHANGE, videoTime });
