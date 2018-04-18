import {
  TOGGLE_PLAY, VIDEO_TIME_CHANGE, ADD_VIDEO_DURATION, ADD_CLIP,
  EDIT_CLIP, SET_CURRENT_CLIP, REMOVE_CLIP,
} from './actionTypes';

export const togglePlay = isPlaying => ({
  type: TOGGLE_PLAY, payload: isPlaying,
});

export const videoTimeChange = videoTime => ({
  type: VIDEO_TIME_CHANGE, payload: videoTime,
});

export const addVideoDuration = videoDuration => ({
  type: ADD_VIDEO_DURATION, payload: videoDuration,
});

export const addClip = clip => ({ type: ADD_CLIP, payload: clip });

export const editClip = clip => ({ type: EDIT_CLIP, payload: clip });

export const setCurrentClip = (id, clipSelected) => ({
  type: SET_CURRENT_CLIP,
  payload: {
    currentClipId: id,
    clipSelected,
  },
});

export const removeClip = id => ({ type: REMOVE_CLIP, payload: id });
