import { TOGGLE_PLAY, VIDEO_TIME_CHANGE, ADD_VIDEO_DURATION } from '../actions/actionTypes';

const initialState = {
  isPlaying: false,
  videoTime: 0,
  videoDuration: 0,
};

export default function videoPlayerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_PLAY:
      return { ...state, isPlaying: action.isPlaying };
    case VIDEO_TIME_CHANGE:
      return { ...state, videoTime: action.videoTime };
    case ADD_VIDEO_DURATION:
      return { ...state, videoDuration: action.videoDuration };
    default:
      return state;
  }
}
