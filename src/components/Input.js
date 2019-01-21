import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { type, name, label } = props;
  return (
    <div className="input">
      <label htmlFor={name} className="input__label">{label}</label>
      <input type={type} name={name} className="input__field" />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input;