import { useState } from "react";

export default function Inputs() {
  let [emUnitValue, setEmUnitValue] = useState<number>(0);
  let [remUnitValue, setRemUnitValue] = useState<number>(0);
  let [pixelUnitValue, setPixelUnitValue] = useState<number>(0);
  let [percentUnitValue, setPercentUnitValue] = useState<number>(0);
  //   let [unitsBaseValue, setUnitsBaseValue] = useState<number>(0);

  //   const configureUnitsBaseValue = () => {};

  const convertUnits = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "em-input") {
      setEmUnitValue((emUnitValue = Number(event.target.value)));
      setRemUnitValue((remUnitValue = emUnitValue + 10));
      setPixelUnitValue((pixelUnitValue = emUnitValue + 10));
      setPercentUnitValue((percentUnitValue = emUnitValue + 10));
    } else if (event.target.id === "rem-input") {
      setRemUnitValue((remUnitValue = Number(event.target.value)));
      setEmUnitValue((emUnitValue = remUnitValue + 20));
      setPixelUnitValue((pixelUnitValue = remUnitValue + 20));
      setPercentUnitValue((percentUnitValue = remUnitValue + 20));
    } else if (event.target.id === "pixel-input") {
      setPixelUnitValue((pixelUnitValue = Number(event.target.value)));
      setEmUnitValue((emUnitValue = pixelUnitValue + 30));
      setPercentUnitValue((percentUnitValue = pixelUnitValue + 30));
      setRemUnitValue((remUnitValue = pixelUnitValue + 30));
    } else {
      setPercentUnitValue((percentUnitValue = Number(event.target.value)));
      setRemUnitValue((remUnitValue = percentUnitValue + 40));
      setEmUnitValue((emUnitValue = percentUnitValue + 40));
      setPixelUnitValue((pixelUnitValue = percentUnitValue + 40));
    }
  };

  return (
    <>
      <input
        type="number"
        name="units-value-input"
        id="em-input"
        className="units-value-input"
        value={emUnitValue}
        onChange={convertUnits}
      />
      <input
        type="number"
        name="units-value-input"
        id="rem-input"
        className="units-value-input"
        value={remUnitValue}
        onChange={convertUnits}
      />
      <input
        type="number"
        name="units-value-input"
        id="pixel-input"
        className="units-value-input"
        value={pixelUnitValue}
        onChange={convertUnits}
      />
      <input
        type="number"
        name="units-value-input"
        id="percent-input"
        className="units-value-input"
        value={percentUnitValue}
        onChange={convertUnits}
      />
    </>
  );
}
