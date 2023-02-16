import React from "react";
import { IoMdRefreshCircle } from "react-icons/io";
import { TiHeart } from "react-icons/ti";

const Buttons = (props) => {
  return (
    <div className="buttons-container">
      <IoMdRefreshCircle
        className="icon"
        onClick={function (e) {
          window.location.reload();
        }}
      >
        NEW PALETTE
      </IoMdRefreshCircle>
      <TiHeart
        className="icon save-palette"
        onClick={() => props.showSavedPalette(true)}
      >
        SAVE PALETTE
      </TiHeart>
    </div>
  );
};

export default Buttons;
