import React from "react";
import PropTypes from "prop-types";
import styles from './Notification.module.scss';

const Notification = ({ title }) => {
  const {title_notification} =styles;
  return <h3 className={title_notification}>{title}</h3>;
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification;
