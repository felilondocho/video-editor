import {
  TOGGLE_PLAY, VIDEO_TIME_CHANGE, ADD_VIDEO_DURATION, ADD_CLIP,
  EDIT_CLIP, SET_CURRENT_CLIP, REMOVE_CLIP, REMOVE_CURRENT_CLIP,
} from '../actions/actionTypes';

const initialState = {
  isPlaying: false,
  videoTime: 0,
  videoDuration: 0,
  clips: [],
  currentClip: {},
  clipSelected: false,
};

export default function videoPlayerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_PLAY:
      return { ...state, isPlaying: action.payload };
    case VIDEO_TIME_CHANGE:
      return { ...state, videoTime: action.payload };
    case ADD_VIDEO_DURATION:
      return { ...state, videoDuration: action.payload };
    case ADD_CLIP:
      return { ...state, clips: [...state.clips, action.payload] };
    case EDIT_CLIP:
      return {
        ...state,
        clips: [...state.clips]
          .map(clip => (
            clip.id === action.payload.id ? action.payload : clip
          )),
      };
    case SET_CURRENT_CLIP: {
      const currentClip = state.clips.find(clip => clip.id === action.payload.currentClipId);
      return {
        ...state,
        currentClip,
        videoTime: currentClip.startTime,
        clipSelected: action.payload.clipSelected,
      };
    }
    case REMOVE_CLIP:
      return {
        ...state,
        clips: state.clips.filter(clip => clip.id !== action.payload),
      };
    case REMOVE_CURRENT_CLIP:
      return { ...state, currentClip: {} };
    default:
      return state;
  }
}
