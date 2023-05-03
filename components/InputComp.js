import React from "react";

const InputComp = ({ placeholder, color, onChange, className, name, id }) => {
  const label = {
    color: color ? `${color}` : "black",
  };
  return (
    <div className={`input_field ${className}}`}>
      <input type="text" required onChange={onChange} name={name} id={id} />
      <label style={label}>{placeholder}</label>
      <span className="line"></span>
    </div>
  );
};

export default InputComp;
