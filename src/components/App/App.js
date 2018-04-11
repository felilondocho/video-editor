import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import styles from './App.scss';

const App = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <h1 className={styles.appTitle}>Welcome to React</h1>
    </header>
    <div className={styles.container}>
      <div className={styles.topRegion}>
        <div className={styles.placeHolder} />
        <VideoPlayer />
      </div>
    </div>
  </div>
);

export default App;
