import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedBackOptions.module.scss";
import classNames from "classnames";

const FeedbackOptions = ({ handleFeedBack }) => {
  const activeClassnames = (color) => {
    return classNames(button_feedback, {
      [button_feedback_green]: color === "green",
      [button_feedback_orange]: color === "orange",
      [button_feedback_red]: color === "red",
    });
  };
  const {
    list_buttons,
    button_feedback,
    button_feedback_green,
    button_feedback_orange,
    button_feedback_red,
  } = styles;
  return (
    <ul className={list_buttons}>
      <li>
        <button
          className={activeClassnames("green")}
          name="good"
          onClick={handleFeedBack}
          type="button"
        >good</button>
      </li>
      <li>
        <button
          className={activeClassnames("orange")}
          name="neutral"
          onClick={handleFeedBack}
          type="button"
        >neutral</button>
      </li>
      <li>
      <button className={activeClassnames('red')} name='bad' onClick={handleFeedBack} type="button">bad</button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  handleFeedBack: PropTypes.func.isRequired,
};

export default FeedbackOptions;
