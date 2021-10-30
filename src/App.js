import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  countPositivePercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositivePercentage();
    return (
      <div className="Container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={total ? positivePercentage : 0}
          />
        </Section>
      </div>
    );
  }
}

export default App;
