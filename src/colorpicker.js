import React, { useState } from 'react';

const ColorPicker = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'brown', 'gray','deeppink', 'firebrick', 'darkturquoise','lemonchiffon'];
  const [selectedColor, setSelectedColor] = useState(null);

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
    setSelectedColor(color);
  };

  return (
    <div>
      <div className="color-picker-container"> 
      <h2>Color Picker</h2>
      <div className="color-picker">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-box ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => changeBackgroundColor(color)}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ColorPicker;
