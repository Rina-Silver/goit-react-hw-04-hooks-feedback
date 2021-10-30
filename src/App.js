import React, { Component } from 'react';
import Section from 'components/Section/Section';
// import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
// import Notification from 'components/Notification/Notification';

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

  render() {
    const options = Object.keys(this.state);
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {/* <Section title="Statistics">
          <Statistics good={} neutral={} bad={} total={} positivePercentage={}/>
          <Notification message="No feedback given" />
        </Section> */}
      </div>
    );
  }
}

export default App;
