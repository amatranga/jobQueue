import React from 'react';
import AddJob from './AddJob';
import Timer from './Timer';

const exampleJob = {
  name: 'Hard coded example',
  submittedAt: {
    time: '(HH:MM:SS AM/PM)',
    date: '(MM/DD/YYYY)'
  },
  waitTime: 10,
  jobNumber: 0
};

class JobQueue extends React.Component {
  constructor() {
    super();
    this.state = {
      allJobs: [exampleJob],
      paused: false
    };

    this.addJob = this.addJob.bind(this);
    this.delete = this.delete.bind(this);
    this.pause = this.pause.bind(this);
  }

  addJob(job) {
    let allJobs = this.state.allJobs;
    allJobs.push(job);
    this.setState(allJobs);
  }

  delete(job) {
    this.setState(prevState => ({
      allJobs: prevState.allJobs.filter(el => JSON.stringify(el) !== JSON.stringify(job))
    }));
  }

  pause() {
    let paused = !this.state.paused;
    this.setState({paused});
  }

  render() {
    const allJobs = this.state.allJobs;
    const nextNumber = allJobs.length ? Number(allJobs[allJobs.length - 1].jobNumber) + 1 : 1;
    const paused = this.state.paused ? true : false;
    return (
      <div className="wrapper">
        <AddJob addJob={this.addJob} currentNumber={nextNumber} canAddJob={paused ? false : true} />
        <hr />
        <div>
          <h3>Currently Open Jobs</h3>
          <button className="pause button" onClick={this.pause}>Pause Queue</button>
          {this.state.allJobs.map((job, idx) =>
            <div key={idx} className="job-item-queue" paused={paused ? true : false}>
              <div className="job-item">
                <h4>{job.name}</h4>
                <p>Submitted: {job.submittedAt.time}, {job.submittedAt.date}</p>
                <Timer paused={paused ? true : false} job={job} delete={this.delete} />
                <p>Max wait time: {job.waitTime} seconds</p>
                <p>Job # {job.jobNumber}</p>
              </div>
              <div>
                <button className="cancel button" onClick={this.delete.bind(this, job)}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default JobQueue;
