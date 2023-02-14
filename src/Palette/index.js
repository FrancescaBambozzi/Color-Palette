import React from "react";
import PaletteColor from "./PaletteColor.js";

const Palette = (props) => {
  const palette = props.palette.map((color) => (
    <PaletteColor
      key={color}
      color={color}
      removeFromPalette={props.removeFromPalette}
    />
  ));
  return (
    <div className="palette-container">
      <h1>Color Palette</h1>
      <h2>Tap over the colors to generate your own color palette!</h2>
      <ul className="palette-colors">{palette}</ul>
    </div>
  );
};

export default Palette;
