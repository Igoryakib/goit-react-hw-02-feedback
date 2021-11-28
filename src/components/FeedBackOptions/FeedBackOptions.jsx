import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedBackOptions.module.scss";
import classNames from "classnames";

const FeedbackOptions = ({ btnArray, handleFeedBack }) => {
  const activeClassnames = (color) => {
    return classNames(button_feedback, {
      [button_feedback_green]: color === 'green',
      [button_feedback_orange]: color === 'orange',
      [button_feedback_red]: color === 'red',
    })
  };
  const { list_buttons, button_feedback, button_feedback_green, button_feedback_orange, button_feedback_red } = styles;
  return (
    <ul className={list_buttons}>
      {btnArray.map((item) => {
        return (
          <li key={item.id}>
            <button className={activeClassnames(item.color)} name={item.title} onClick={handleFeedBack} type="button">
              {item.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  btnArray: PropTypes.array.isRequired,
  handleFeedBack: PropTypes.func.isRequired,
};

export default FeedbackOptions;
