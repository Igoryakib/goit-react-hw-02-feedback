import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";
import FeedbackOptions from "../FeedBackOptions/FeedBackOptions";
import Notification from "../Notification/Notification";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static propTypes = {
    statisticsArray: PropTypes.array.isRequired,
    btnData: PropTypes.array.isRequired,
    titleStatistics: PropTypes.string,
  };
  handleIncrementFeedBack = (event) => {
    this.setState((prevState) => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };
  render() {
    const { titleStatistics, statisticsArray, btnData } = this.props;
    // const { good, neutral, bad } = this.state;
    const {title_stat, list_item} = styles;
    return (
      <>
        <FeedbackOptions
          btnArray={btnData}
          handleFeedBack={this.handleIncrementFeedBack}
        />
        <div>
          <h2 className={title_stat}>{titleStatistics}</h2>
          {this.countTotalFeedback() === 0 ? (
            <Notification title="There is no feedback" />
          ) : (
            <ul>
              {statisticsArray.map((item) => {
                return (
                  <li className={list_item} key={item.id}>
                    {item.title}:
                    {item.type
                      ? this.state[item.type]
                      : item.total
                      ? this.countTotalFeedback()
                      : item.percentageFeedBack &&
                        this.countPositiveFeedbackPercentage()}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default Statistics;
