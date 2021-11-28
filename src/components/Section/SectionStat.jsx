import React from "react";
import styles from './Section.module.scss';
import PropTypes from "prop-types";

const SectionStat = ({ title, children }) => {
  const {content_feedback, title_section} = styles;
  return (
    <>
      <section className={content_feedback}>
        <h1 className={title_section}>{title}</h1>
        {children}
      </section>
    </>
  );
};

SectionStat.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string
};

export default SectionStat;
