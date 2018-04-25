import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClipForm.scss';

class ClipForm extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    if (Object.keys(nextProps.currentClip).length === 0) {
      return null;
    }
    return {
      clipName: nextProps.currentClip.clipName,
      startTime: nextProps.currentClip.startTime,
      endTime: nextProps.currentClip.endTime,
    };
  }

  constructor(props) {
    super(props);
    this.state = ({ startTime: '', endTime: '', clipName: '' });
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
    this.clearCurrentClip = this.clearCurrentClip.bind(this);
  }

  handleStartChange(event) {
    this.setState({ startTime: Number(event.target.value) });
  }

  handleEndChange(event) {
    this.setState({ endTime: Number(event.target.value) });
  }

  handleNameChange(event) {
    this.setState({ clipName: event.target.value });
  }

  saveForm() {
    const {
      editClip, currentClip, setCurrentClip,
    } = this.props;
    if (this.state.startTime < this.state.endTime) {
      editClip({
        id: currentClip.id,
        clipName: this.state.clipName,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
      });
      setCurrentClip(currentClip.id, true);
    } else {
      alert('Time not valid');
    }
  }

  clearCurrentClip() {
    const { removeCurrentClip } = this.props;
    this.setState({
      clipName: '',
      startTime: '',
      endTime: '',
    });
    removeCurrentClip();
  }

  render() {
    const { currentClip, videoDuration } = this.props;
    return (
      <div className={styles.clipFormWrapper}>
        <div className={styles.formTop}>
          <p>{currentClip.clipName}</p>
        </div>
        <form className={styles.clipForm} onSubmit={e => e.preventDefault()}>
          <div className={styles.formRow}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.clipName}
              onChange={this.handleNameChange}
              id="name"
            />
          </div>
          {videoDuration ?
            <div className={styles.formRow}>
              <label htmlFor="startTime">Start time</label>
              <input
                type="number"
                value={this.state.startTime}
                onChange={this.handleStartChange}
                id="startTime"
                min="0"
                max={videoDuration}
              />
            </div> : null}
          {videoDuration ?
            <div className={styles.formRow}>
              <label htmlFor="endTime">End time</label>
              <input
                type="number"
                value={this.state.endTime}
                onChange={this.handleEndChange}
                id="endTime"
                min="0"
                max={videoDuration}
              />
            </div> : null }
          <div className={styles.formRow}>
            <button onClick={this.clearCurrentClip}>
              <img src="./assets/cancel.svg" alt="cancel" />
            </button>
            <button onClick={this.saveForm}>
              <img src="./assets/save.svg" alt="save" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ClipForm.propTypes = {
  currentClip: PropTypes.shape({
    id: PropTypes.number,
    clipName: PropTypes.string,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
  }).isRequired,
  editClip: PropTypes.func.isRequired,
  setCurrentClip: PropTypes.func.isRequired,
  removeCurrentClip: PropTypes.func.isRequired,
  videoDuration: PropTypes.number.isRequired,
};

export default ClipForm;
