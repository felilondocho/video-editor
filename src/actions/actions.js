import { PLAY, STOP, FORWARD, BACKWARD } from './actionTypes';

export const playVideo = () => ({ type: PLAY });
export const pauseVideo = () => ({ type: STOP });
export const advanceVideo = () => ({ type: FORWARD });
export const backVideo = () => ({ type: BACKWARD });
