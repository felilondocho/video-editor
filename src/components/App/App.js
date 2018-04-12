import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoClipsList from '../VideoClipsList';
import ClipForm from '../ClipForm';
import styles from './App.scss';

const App = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <h1 className={styles.appTitle}>Welcome to React</h1>
    </header>
    <div className={styles.container}>
      <div className={styles.topRegion}>
        <VideoClipsList />
        <VideoPlayer />
        <ClipForm />
      </div>
    </div>
  </div>
);

export default App;
