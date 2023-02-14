import React from "react";
import CssOptionsList from "./CssOptionsList.js";
import SelectedCssOption from "./SelectedCssOption.js";

const CssOptions = (props) => (
  <div>
    <button onClick={function (e) {
      window.location.reload();
    }}>NEW PALETTE</button>
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
