import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const Input = (props) => {
  const { type, name, label } = props;
  return (
    <div className="input">
      <label htmlFor={name} className="input__label">{label}</label>
      <InputMask type={type} name={name} className="input__field" mask="99.999.999/9999-99" maskChar="" {...props} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input;