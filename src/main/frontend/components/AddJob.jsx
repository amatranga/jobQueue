import React from 'react';

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submittedAt: '',
      waitTime: '',
      jobNumber: 0,
      _endTime: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = this.state.name;
    name += e.target.value;
    this.setState({name});
  }

  handleSubmit(e) {
    e.preventDefault();
    const state = this.state;
    const job = {
      name: state.name,
      submittedAt: state.submittedAt,
      waitTime: state.waitTime,
      jobNumber: state.jobNumber,
      _endTime: state._endTime
    };
    this.props.addJob(job);
    this.setState({
      name: '',
      submittedAt: '',
      waitTime: '',
      jobNumber: 0,
      _endTime: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Job Description:
          <input type="text" name="description" value={this.state.name} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default AddJob;
