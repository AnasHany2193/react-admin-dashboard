import React from "react";
import Header from "../components/Header";

import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-9 md:p-9 rounded-3xl">
      <Header title="Color Picker" category="App" />

      <div className="text-center">
        <div id="preview" />
        <div className="flex flex-wrap items-center justify-center gap-20">
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              columns={4}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
