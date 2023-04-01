import Link from "next/link";
import React from "react";

const BtnComp = ({ children, isRed, onclick, href, bdr, className }) => {
  const styles = {
    backgroundColor: isRed ? " #FF5656" : "#1A1347",
    color: "#ffffff",
    padding: "0.5rem 1.2rem",
    // borderRadius: "10px",
    width: "fit-content",
    border: "none",
    borderRadius: `${bdr}px`,
  };
  return href ? (
    <Link
      style={styles}
      onClick={onclick}
      href={`${href}`}
      className={className}
    >
      {children}
    </Link>
  ) : (
    <button style={styles} className={className}>
      {children}
    </button>
  );
};

export default BtnComp;
