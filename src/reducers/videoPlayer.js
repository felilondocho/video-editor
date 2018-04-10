import { TOGGLE_PLAY, VIDEO_TIME_CHANGE } from '../actions/actionTypes';

const initialState = {
  isPlaying: false,
  videoTime: 0,
};

export default function videoPlayerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_PLAY:
      console.log(action.isPlaying);
      return { ...state, isPlaying: action.isPlaying };
    case VIDEO_TIME_CHANGE:
      console.log(action.videoTime);
      return { ...state, videoTime: action.videoTime };
    default:
      return state;
  }
}
