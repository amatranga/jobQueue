import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentWillMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  tick() {
    const count = this.state.count + 1;
    const seconds = (count % 60).toLocaleString(undefined, {minimumIntegerDigits: 2});
    const minutes = Math.floor(count / 60).toLocaleString(undefined, {minimumIntegerDigits: 2});
    const hours = Math.floor(minutes / 60).toLocaleString(undefined, {minimumIntegerDigits: 2});
    this.setState({count, seconds, minutes, hours});
  }

  render() {
    return (
      <div className="timer">
        <h5>{this.state.hours}:{this.state.minutes}:{this.state.seconds} HH:MM:SS</h5>
      </div>
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.paused === true) {
      this.stopTimer();
    } else {
      this.startTimer();
      if (nextProps.job.waitTime <= this.state.count) {
        this.props.delete(this.props.job);
      }
    }
  }
}

export default Timer;
