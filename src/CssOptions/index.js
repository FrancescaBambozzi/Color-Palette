import React from "react";
import CssOptionsList from "./CssOptionsList.js";
import SelectedCssOption from "./SelectedCssOption.js";
import PaletteColor from "../Palette/PaletteColor.js";
import { IoMdRefreshCircle } from 'react-icons/io';
import { TiHeartOutline } from 'react-icons/ti';

const CssOptions = (props) => (
  <div>
    <div className="buttons-container">
      <IoMdRefreshCircle className="icon"
        onClick={function (e) {
          window.location.reload();
        }}
      >
        NEW PALETTE
      </IoMdRefreshCircle>
      <TiHeartOutline
        className="icon save-palette"
        onClick={function (palette) {
          console.log(props.palette)
        }}
      >
        SAVE PALETTE
      </TiHeartOutline>
    </div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row">
      <CssOptionsList selectColor={props.selectColor} />
      <SelectedCssOption
        palette={props.palette}
        selectedColor={props.selectedColor}
        addToPalette={props.addToPalette}
      />
    </div>
  </div>
);

export default CssOptions;
