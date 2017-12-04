import React from 'react';

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submittedAt: '',
      waitTime: 0,
      jobNumber: undefined,
      _endTime: ''
    };

    this._getRandomInterval = this._getRandomInterval.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _getRandomInterval() {
    return (Math.floor(Math.random() * (15000 - 500 + 1)) + 500) / 1000;
  }

  handleChange(e) {
    let name = e.target.value;
    this.setState({name});
  }

  handleSubmit(e) {
    const jobNumber = this.props.currentNumber.toLocaleString(undefined, {minimumIntegerDigits: 6, useGrouping: false});
    e.preventDefault();
    const state = this.state;
    const date = new Date();
    const job = {
      name: state.name,
      submittedAt: {
        time: date.toLocaleTimeString(),
        date: date.toLocaleDateString()
      },
      waitTime: this._getRandomInterval(),
      jobNumber,
      _endTime: this._getRandomInterval()
    };
    this.props.addJob(job);
    this.setState({
      name: '',
      submittedAt: '',
      waitTime: '',
      jobNumber: undefined,
      _endTime: ''
    });
  }

  render() {
    if (this.props.canAddJob) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Job Description:</label>
          <input className="job-input" type="text" name="description" value={this.state.name} onChange={this.handleChange} required />
          <button className="submit button" type="submit">Submit</button>
        </form>
      );
    } else {
      return (
        <form>
          <label>Job Description:</label>
          <input className="job-input" type="text" name="description" value={this.state.name} onChange={this.handleChange} required />
          <button
            className="submit button disabled"
            data-tooltip="Unpause the queue with the Pause button to add a job"
            disabled="true">
            Submit
          </button>
        </form>
      );
    }
  }
}

export default AddJob;
