import { PLAY, STOP, FORWARD, BACKWARD } from '../actions/actionTypes';

const initialState = {
  temp: '',
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
    default:
      return state;
  }
}
