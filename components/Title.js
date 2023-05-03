import React from "react";

const Title = ({ width, title }) => {
  const styleBody = {
    width: width ? `${width}%` : "90%",
    margin: "2rem auto",
  };
  const font = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const underLine = {
    width: "100%",
    height: "2px",
    backgroundColor: "#281a92",
  };
  return (
    <div style={styleBody}>
      <span style={font}>{title}</span>
      <div style={underLine}></div>
    </div>
  );
};

export default Title;
