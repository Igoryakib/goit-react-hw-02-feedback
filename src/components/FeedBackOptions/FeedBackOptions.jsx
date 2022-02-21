import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedBackOptions.module.scss";
import classNames from "classnames";

const FeedbackOptions = ({ handleFeedBack, btnArray }) => {
  const activeClassnames = (color) => {
    return classNames(button_feedback, {
      [button_feedback_green]: color === "good",
      [button_feedback_orange]: color === "neutral",
      [button_feedback_red]: color === "bad",
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
      {btnArray.map((item) => {
        return (
          <li>
            <button
              className={activeClassnames(item)}
              name={item}
              onClick={handleFeedBack}
              type="button"
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  handleFeedBack: PropTypes.func.isRequired,
};

export default FeedbackOptions;
