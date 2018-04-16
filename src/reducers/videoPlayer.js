import {
  TOGGLE_PLAY, VIDEO_TIME_CHANGE, ADD_VIDEO_DURATION, ADD_CLIP,
  EDIT_CLIP, SET_CURRENT_CLIP, REMOVE_CLIP,
} from '../actions/actionTypes';

const initialState = {
  isPlaying: false,
  videoTime: 0,
  videoDuration: 0,
  clips: [],
  currentClip: {},
  currentClipSelected: false,
};

export default function videoPlayerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_PLAY:
      return { ...state, isPlaying: action.isPlaying };
    case VIDEO_TIME_CHANGE:
      return { ...state, videoTime: action.videoTime };
    case ADD_VIDEO_DURATION:
      return { ...state, videoDuration: action.videoDuration };
    case ADD_CLIP:
      return { ...state, clips: action.clips };
    case EDIT_CLIP:
      return { ...state, clips: action.newClips };
    case SET_CURRENT_CLIP:
      return {
        ...state,
        currentClip: action.currentClip,
        videoTime: action.videoTime,
        currentClipSelected: action.currentClipSelected,
      };
    case REMOVE_CLIP:
      return { ...state, clips: action.newClips };
    default:
      return state;
  }
}
