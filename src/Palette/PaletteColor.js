import React from "react";

const PaletteColor = (props) => (
  <li
    className="palette-color"
    onClick={function () {
      {/* on click display the color name */}
      var colorName = document.getElementsByClassName("color-name");
    }}
  >
    <span
      className="palette-color-preview"
      style={{ backgroundColor: props.color }}
    />
    <div className="color-name hide">
      {props.color}
      <span
        onClick={() => props.removeFromPalette(props.color)}
        className="remove-from-palette"
      >
        X
      </span>
    </div>
  </li>
);

export default PaletteColor;
