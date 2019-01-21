import React from 'react';
import PropTypes from 'prop-types';

const Step = (props) => {
  const { number, title } = props;
  return (
    <div className="step">
      <div className="step__number">{number}</div>
      <div className="step__title">{title}</div>
    </div>
  )
}

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Step;