import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSeconds: 0,
      isRunning: false
    };
    this.timer = null;
  }

  handleStart = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          totalSeconds: prevState.totalSeconds + 1
        }));
      }, 1000);
      this.setState({ isRunning: true });
    }
  };

  handleStop = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ totalSeconds: 0, isRunning: false });
  };

  formatTime = (totalSeconds) => {
    return `${Math.floor(totalSeconds / 3600)}:${String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')}:${String(totalSeconds % 60).padStart(2, '0')}`;
  };
  
  render() {
    const { totalSeconds, isRunning } = this.state;
    return (
      <div>
        <p>Time: {this.formatTime(totalSeconds)}</p>
        <button onClick={this.handleStart} disabled={isRunning}> Start </button>
        <button onClick={this.handleStop} disabled={!isRunning}> Stop </button>
        <button onClick={this.handleReset}> Reset </button>
      </div>
    );
  }
}

export default Timer;
