import React, { Component } from "react";
import { getEffectiveTypeParameterDeclarations } from "typescript";
import CssOptions from "./CssOptions";
import Palette from "./Palette";
import Buttons from "./Palette/Buttons";

class App extends Component {
  state = { selectedColor: "blue", palette: ["blue"] };
  selectColor = (color) => this.setState({ selectedColor: color });
  addToPalette = (color) => {
    if (!this.state.palette.includes(color) && this.state.palette.length < 5) {
      const newPalette = this.state.palette.concat(color);
      this.setState({ palette: newPalette });
    }

    if (this.state.palette.length >= 5) {
      //show "max options selected" message
      const popup = document.getElementById("popup");
      popup.style.display = "block";
    }
  };
  removeFromPalette = (color) => {
    const newPalette = this.state.palette.filter(
      (paletteColor) => paletteColor !== color
    );
    this.setState({ palette: newPalette });
  };

  savePalette = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Palette
          palette={this.state.palette}
          removeFromPalette={this.removeFromPalette}
        />
        <div id="popup" className="hide">
          MAX 5 OPTIONS!
        </div>
        <Buttons savePalette={this.savePalette} />
        <CssOptions
          palette={this.state.palette}
          addToPalette={this.addToPalette}
          selectColor={this.selectColor}
          selectedColor={this.state.selectedColor}
        />
      </div>
    );
  }
}

export default App;
