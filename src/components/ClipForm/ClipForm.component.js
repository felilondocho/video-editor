import React from 'react';
import PropTypes from 'prop-types';

class ClipForm extends React.Component {
  constructor(props) {
    super(props);
    this.startInputRef = React.createRef();
    this.endInputRef = React.createRef();
  }
  // componentDidMount() {
  //   const { currentClip } = this.props;
  //   this.startInputRef.current.value = currentClip.startTime;
  //   this.endInputRef.current.value = currentClip.endTime;
  // }

  getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps)
  }
  render() {
    const { currentClip } = this.props;
    return (
      <div>
        {!Object.keys(currentClip).length === 0 ?
          <div>
            <p>{currentClip.clipName}</p>
            <form>
              {/* <input
                type="text"
                ref={this.startInputRef}
              />
              <input
                type="text"
                ref={this.endInputRef}
              /> */}
            </form>
          </div>
        :
        <div>
          <p>{currentClip.clipName}</p>
          <form>
            {/* <input
              type="text"
              ref={this.startInputRef}
            />
            <input
              type="text"
              ref={this.endInputRef}
            /> */}
          </form>
        </div>
        }
      </div>
    );
  }
}

ClipForm.propTypes = {
  currentClip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    clipName: PropTypes.string.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default ClipForm;
