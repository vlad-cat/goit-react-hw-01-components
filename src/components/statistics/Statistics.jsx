import React from 'react';
import PropTypes from 'prop-types';
import statisticsStyle from './Statistics.module.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={statisticsStyle.statistics}>
      {title && <h2 className={statisticsStyle.title}>{title}</h2>}

      <ul className={statisticsStyle.stat__list}>
        {stats.map(item => (
          <li
            className={statisticsStyle.item}
            key={item.id}
            style={{
              backgroundColor: `rgb(${getRandomInt(0, 255)}, ${getRandomInt(
                0,
                255
              )}, ${getRandomInt(0, 255)})`,
            }}
          >
            <span className={statisticsStyle.label}>{item.label}</span>
            <span className={statisticsStyle.percentage}>
              {item.percentage}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
