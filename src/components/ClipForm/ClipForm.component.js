import React from 'react';
import PropTypes from 'prop-types';

class ClipForm extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    if (Object.keys(nextProps.currentClip).length === 0) {
      return null;
    }
    return {
      startTime: nextProps.currentClip.startTime,
      endTime: nextProps.currentClip.endTime,
    };
  }
  constructor(props) {
    super(props);
    this.state = ({ startTime: 0, endTime: 0 });
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  handleStartChange(event) {
    this.setState({ startTime: Number(event.target.value) });
  }

  handleEndChange(event) {
    this.setState({ endTime: Number(event.target.value) });
  }

  saveForm() {
    const {
      editClip, currentClip, clips, setCurrentClip,
    } = this.props;
    editClip(
      clips, currentClip.id, currentClip.clipName,
      this.state.startTime, this.state.endTime,
    );
    setCurrentClip({
      id: currentClip.id,
      clipName: currentClip.clipName,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
    });
  }

  render() {
    const { currentClip } = this.props;
    return (
      <div>
        <div>
          <p>{currentClip.clipName}</p>
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              value={this.state.startTime}
              onChange={this.handleStartChange}
            />
            <input
              type="text"
              value={this.state.endTime}
              onChange={this.handleEndChange}
            />
            <button onClick={this.saveForm}>save</button>
          </form>
        </div>
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
  clips: PropTypes.arrayOf(PropTypes.object).isRequired,
  editClip: PropTypes.func.isRequired,
  setCurrentClip: PropTypes.func.isRequired,
};

export default ClipForm;
