import { PLAY, STOP, FORWARD, BACKWARD, SEEKBAR_CHANGE, VIDEO_TIME_CHANGE } from '../actions/actionTypes';

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
    case FORWARD:
      console.log('fw');
      return state;
    case BACKWARD:
      console.log('bw');
      return state;
    case SEEKBAR_CHANGE:
      return state;
    case VIDEO_TIME_CHANGE:
      return state;
    default:
      return state;
  }
}
