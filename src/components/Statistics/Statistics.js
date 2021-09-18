import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul className={styles.List}>
        <li className={styles.Item}>Добре:{good}</li>
        <li className={styles.Item}>Нейтрально:{neutral}</li>
        <li className={styles.Item}>Погано:{bad}</li>
        <li className={styles.Item}>Всього:{total}</li>
        <li className={styles.Item}>
          Позитивних відгуків: {positivePercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="Відгуків не надано" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
