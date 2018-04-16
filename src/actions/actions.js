import {
  TOGGLE_PLAY, VIDEO_TIME_CHANGE, ADD_VIDEO_DURATION, ADD_CLIP,
  EDIT_CLIP, SET_CURRENT_CLIP, REMOVE_CLIP,
} from './actionTypes';

export const togglePlay = isPlaying => ({ type: TOGGLE_PLAY, isPlaying });
export const videoTimeChange = videoTime => ({ type: VIDEO_TIME_CHANGE, videoTime });
export const addVideoDuration = videoDuration =>
  ({ type: ADD_VIDEO_DURATION, videoDuration });
export const addClip = (clips, id, clipName, startTime, endTime) =>
  ({
    type: ADD_CLIP,
    clips: [...clips, {
      id, clipName, startTime, endTime,
    }],
  });
export const editClip = (clips, id, clipName, startTime, endTime) => {
  const newClips = [...clips]
    .map(clip => (clip.id === id ? {
      id, clipName, startTime, endTime,
    } : clip));
  return { type: EDIT_CLIP, newClips };
};
export const setCurrentClip = (currentClip, currentClipSelected) =>
  ({
    type: SET_CURRENT_CLIP,
    currentClip,
    videoTime: currentClip.startTime,
    currentClipSelected,
  });
export const removeClip = (clips, id) => {
  const newClips = clips.filter(clip => clip.id !== id);
  return { type: REMOVE_CLIP, newClips };
};
