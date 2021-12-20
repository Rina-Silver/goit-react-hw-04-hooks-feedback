import { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const values = Object.values({ good, neutral, bad });
    return values.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  const countPositivePercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const total = countTotalFeedback();
  const positivePercentage = countPositivePercentage();

  return (
    <div className="Container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = name => {
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const values = Object.values(this.state);
//     return values.reduce((acc, val) => {
//       acc += val;
//       return acc;
//     });
//   };

//   countPositivePercentage = () =>
//     Math.round((this.state.good / this.countTotalFeedback()) * 100);

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositivePercentage();
//     return (
//       <div className="Container">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={total ? positivePercentage : 0}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
