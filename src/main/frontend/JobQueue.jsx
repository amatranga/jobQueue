import React from 'react';
import AddJob from './components/AddJob';

class JobQueue extends React.Component {
  constructor() {
    super();
    this.state = {
      allJobs: [{name: '1'}, {name: '2'}],
      paused: false
    };

    this.addJob = this.addJob.bind(this);
    this.pause = this.pause.bind(this);
  }

  addJob(job) {
    let allJobs = this.state.allJobs;
    allJobs.push(job);
    this.setState(allJobs);
  }

  pause() {
    let paused = !this.state.paused;
    this.setState({paused});
  }

  render() {
    return (
      <div>
        <AddJob addJob={this.addJob} />
        <hr />
        <div>
          <h3>Currently Open Jobs</h3>
          {this.state.allJobs.map((job, idx) =>
            <div key={idx}>
              {job.name}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default JobQueue;
