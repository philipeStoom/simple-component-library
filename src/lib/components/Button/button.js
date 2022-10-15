import React from "react";

const Button = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  helpText
}) => (
  <div className="simple-form-group">
    <button onChange={e => onChange && onChange(e.target.value)}>{name}</button>
  </div>
);

export default Button;
