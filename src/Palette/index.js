import React from "react";
import PaletteColor from "./PaletteColor.js";
import GeneratedPalette from "./GeneratedPalette.js";

const Palette = (props) => {
  return (
    <div className="palette-container">
      <h1>Color Palette</h1>
      <h2>Tap over the colors to generate your own color palette!</h2>
      <GeneratedPalette palette={props.palette} removeFromPalette={props.removeFromPalette}/>
    </div>
  );
};

export default Palette;
