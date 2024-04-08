import './App.css';

import React, { Component } from 'react';
import Timer from './Timer';

class TimerApp extends Component {
  render() {
    return (
      <div className="center">
        <h1>Timer APP</h1>
        <Timer />
      </div>
    );
  }
}

export default TimerApp;
