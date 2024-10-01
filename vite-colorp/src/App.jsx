/* eslint-disable react/prop-types */
import { useState } from "react";

const Color = ({ color, selectedColor, setSelectedColor }) => {
  // ternary operator to compare the "selectedColor" on state to the "color" prop that each Color receives
  const isSelected = selectedColor === color ? "selected" : "";

  return (
    <div
      // isSelected is used as a className and will be either "selected" or empty string
      className={`${color} ${isSelected}`}
      onClick={() => setSelectedColor(color)}
    />
  );
};
const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {/* pass the selected color as prop to Color Component */}
        <Color
          color="yellow"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="green"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="black"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;