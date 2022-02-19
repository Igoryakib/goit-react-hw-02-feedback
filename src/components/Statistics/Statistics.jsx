import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const {list_item } = styles;
  return (
    <div>
      {total === 0 ? (
        <Notification title="There is no feedback" />
      ) : (
        <ul>
          <li className={list_item}>Good:{good}</li>
          <li className={list_item}>Neutral:{neutral}</li>
          <li className={list_item}>Bad:{bad}</li>
          <li className={list_item}>Total:{total}</li>
          <li className={list_item}>PositivePercentage:{positivePercentage}</li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}

export default Statistics;
