import React from "react";
import PaletteColor from "./PaletteColor.js";

const GeneratedPalette = (props) => {
  const palette = props.palette.map((color) => (
    <PaletteColor
      key={color}
      color={color}
      removeFromPalette={props.removeFromPalette}
    />
  ));
  return <ul className="palette-colors">{palette}</ul>;
};

export default GeneratedPalette;
