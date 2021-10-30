import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <ul className="list">
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total}</li>
      <li className={s.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  ) : (
    <Notification message="No feedback given" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

export default Statistics;
