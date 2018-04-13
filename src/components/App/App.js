import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoClipsList from '../VideoClips';
import ClipForm from '../ClipForm';
import styles from './App.scss';

const App = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <h1 className={styles.appTitle}>CLIPPIE</h1>
    </header>
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <VideoClipsList />
        <VideoPlayer />
      </div>
      <div className={styles.bottomContainer}>
        <ClipForm />
      </div>
    </div>
  </div>
);

export default App;
