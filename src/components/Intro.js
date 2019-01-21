import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdShowChart, MdArrowForward } from 'react-icons/md';

const Intro = (props) => {
  const { title, subtitle } = props;
  const { label, href } = props.link;
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__content">
          <MdShowChart className="intro__icon"/>
          <h1 className="intro__title">{title}</h1>
          <p className="intro__subtitle">{subtitle}</p>
        </div>

        <Link to={href} className="button button--white">
          {label}
          <MdArrowForward />
        </Link>
      </div>
    </div>
  )
}

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
}

export default Intro;