import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faCaretLeft,
  faCaretRight,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaginationBtn = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className="d-flex align-items-center btn_pag">
      <FontAwesomeIcon
        icon={title === "Next" || title === "next" ? faCaretRight : faCaretLeft}
        width={15}
        className={`${title === "next" || "Next" ? "next_btn" : "back_btn"} `}
      />
      <div className="title"></div>
    </div>
  );
};

export default PaginationBtn;
