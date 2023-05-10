import Link from "next/link";
import React from "react";

const TiltleTile = ({ title, href }) => {
  const tileContainer = {
    width: "100%",
    display: "flex",
    borderBottom: "1px solid #191345",
    padding: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const tileTitle = {
    fontWeight: "bold",
    fontSize: "20px",
  };
  const viewStyles = {};
  return (
    <div style={tileContainer}>
      <div>
        <span style={tileTitle}>{title}</span>
      </div>
      <Link href={`${href}`} className="nav-link">
        <span style={viewStyles}>View All</span>
      </Link>
    </div>
  );
};

export default TiltleTile;
