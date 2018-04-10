import { PLAY, STOP, VIDEO_TIME_CHANGE } from '../actions/actionTypes';

const initialState = {
  videoTime: 0,
};

export default function videoPlayerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLAY:
      console.log('play');
      return state;
    case STOP:
      console.log('stop');
      return state;
    case VIDEO_TIME_CHANGE:
      console.log(action.videoTime);
      return { ...state, videoTime: action.videoTime };
    default:
      return state;
  }
}
