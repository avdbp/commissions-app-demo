import React from 'react';
import './CustomInput.css';

const CustomInput = ({ 
  defaultValue = '', 
  disabled = false, 
  placeholder = '', 
  type = 'text',
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      className={`custom-input ${disabled ? 'disabled' : ''} ${className}`}
      {...props}
    />
  );
};

const CustomSelect = ({ 
  data = [], 
  placeholder = 'Select...',
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <select 
      className={`custom-select ${className}`}
      onChange={onChange}
      {...props}
    >
      <option value="">{placeholder}</option>
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

const CustomDatePicker = ({ 
  placeholder = 'Choose a date...',
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <input
      type="date"
      placeholder={placeholder}
      onChange={onChange}
      className={`custom-date-picker ${className}`}
      {...props}
    />
  );
};

export { CustomInput, CustomSelect, CustomDatePicker };
