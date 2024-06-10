import { useState } from "react";
import copyIcon from "../../icons/copy.svg";

export default function Inputs() {
  let [emUnitValue, setEmUnitValue] = useState<number>();
  let [remUnitValue, setRemUnitValue] = useState<number>();
  let [pixelUnitValue, setPixelUnitValue] = useState<number>();
  let [percentUnitValue, setPercentUnitValue] = useState<number>();
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

  const copyUnitValue = async (unitValue: string) => {
    if (!navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(unitValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form method="get">
        <div className="input-and-copy-button-container">
          <div className="input-container">
            <label htmlFor="em-input">EM</label>
            <input
              type="number"
              name="units-value-input"
              id="em-input"
              className="units-value-input"
              placeholder="0"
              value={emUnitValue}
              onChange={convertUnits}
            />
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() =>
              copyUnitValue(
                String(emUnitValue === undefined ? "0" : emUnitValue) + "em"
              )
            }
          >
            <img src={copyIcon} alt="copy" />
          </button>
        </div>
        <div className="input-and-copy-button-container">
          <div className="input-container">
            <label htmlFor="rem-input">REM</label>
            <input
              type="number"
              name="units-value-input"
              id="rem-input"
              className="units-value-input"
              placeholder="0"
              value={remUnitValue}
              onChange={convertUnits}
            />
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() =>
              copyUnitValue(
                String(remUnitValue === undefined ? "0" : remUnitValue) + "rem"
              )
            }
          >
            <img src={copyIcon} alt="copy" />
          </button>
        </div>
        <div className="input-and-copy-button-container">
          <div className="input-container">
            <label htmlFor="pixel-input">PIXEL</label>
            <input
              type="number"
              name="units-value-input"
              id="pixel-input"
              className="units-value-input"
              placeholder="0"
              value={pixelUnitValue}
              onChange={convertUnits}
            />
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() =>
              copyUnitValue(
                String(pixelUnitValue === undefined ? "0" : pixelUnitValue) +
                  "px"
              )
            }
          >
            <img src={copyIcon} alt="copy" />
          </button>
        </div>
        <div className="input-and-copy-button-container">
          <div className="input-container">
            <label htmlFor="percent-input">PERCENT</label>
            <input
              type="number"
              name="units-value-input"
              id="percent-input"
              className="units-value-input"
              placeholder="0"
              value={percentUnitValue}
              onChange={convertUnits}
            />
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() =>
              copyUnitValue(
                String(
                  percentUnitValue === undefined ? "0" : percentUnitValue
                ) + "%"
              )
            }
          >
            <img src={copyIcon} alt="copy" />
          </button>
        </div>
      </form>
    </>
  );
}
