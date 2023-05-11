import React from "react";

const Title = ({ lineWidth, title }) => {
  const styleBody = {
    width: "fit-content",
    margin: "2rem 0",
  };
  const font = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const underLine = {
    width: lineWidth ? `${lineWidth}%` : "100%",
    height: "2px",
    backgroundColor: "#281a92",
  };
  return (
    <div style={styleBody}>
      <span className={"title_comp"}>{title}</span>
      <div style={underLine}></div>
    </div>
  );
};

export default Title;
