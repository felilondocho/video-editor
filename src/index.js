import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.scss';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import videoPlayerReducer from './reducers/videoPlayer';

const store = createStore(videoPlayerReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
