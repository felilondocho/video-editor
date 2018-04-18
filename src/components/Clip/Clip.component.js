import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clip.scss';

const Clip = ({ clipElements, edit, remove }) => (
  <div className={styles.clip}>
    <p>{clipElements.clipName}</p>
    <button onClick={edit} >
      <img src="./assets/edit.svg" alt="edit" />
    </button>
    <button onClick={remove}>
      <img src="./assets/cancel.svg" alt="cancel" />
    </button>
  </div>
);

Clip.propTypes = {
  clipElements: PropTypes.shape({
    id: PropTypes.number.isRequired,
    clipName: PropTypes.string.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Clip;
