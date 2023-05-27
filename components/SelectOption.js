import React, { useState } from "react";

const SelectOption = () => {
  const [open, setOpen] = useState(false);
  const handleDropDown = () => {
    setOpen(!open);
  };
  return (
    <div className={`seletion_opt `} onClick={handleDropDown}>
      dsfs
      <div className={`dropdown_item_container ${open && "active"} `}>
        <div className={`drpd_item`}>sdfsdf</div>
        <div className={`drpd_item`}>sdfsdf</div>
        <div className={`drpd_item`}>sdfsdf</div>
      </div>
    </div>
  );
};

export default SelectOption;
