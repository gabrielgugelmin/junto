import React from 'react';
import PropTypes from 'prop-types';
import { MdShowChart, MdCheckCircle, MdArrowForward } from 'react-icons/md';

const Section = (props) => {
  const { title, subtitle, username, photo } = props;
  const { label } = props.link;
  return (
    <div className="section">
      <header className="section__header">
        <MdShowChart className="section__icon"/>
        <div className="section__header-text">
          <h2 className="section__title">{title}</h2>
          <small className="section__subtitle">{`${subtitle}`}</small>
        </div>
        <img src={photo} alt={username} className="section__photo" />
      </header>
      <div className="section__content">
        {props.children}
      </div>
      <footer className="section__footer">
        <button className="button button--green" onClick={props.action}>
          {label}
          <MdArrowForward />
        </button>
      </footer>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
}

export default Section;