import { useState } from "react";
import copyIcon from "../../icons/copy.svg";

export default function Inputs() {
  let [emUnitValue, setEmUnitValue] = useState<number | string>("");
  let [remUnitValue, setRemUnitValue] = useState<number | string>("");
  let [pixelUnitValue, setPixelUnitValue] = useState<number | string>("");
  let [percentUnitValue, setPercentUnitValue] = useState<number | string>("");
  let [baseValue, setBaseValue] = useState<number>(16);

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

  const configureBaseValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBaseValue(
      (baseValue =
        Number(event.target.value) === 0 ? 16 : Number(event.target.value))
    );
  };

  const copyUnitValue = (unitValue: string) => {
    navigator.clipboard.writeText(unitValue);
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
              value={String(emUnitValue)}
              onChange={convertUnits}
            />
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() =>
              copyUnitValue(emUnitValue === "" ? "0" : emUnitValue + "em")
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
              value={String(remUnitValue)}
              onChange={convertUnits}
            />
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() =>
              copyUnitValue(remUnitValue === "" ? "0" : remUnitValue + "rem")
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
              value={String(pixelUnitValue)}
              onChange={convertUnits}
            />
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() =>
              copyUnitValue(pixelUnitValue === "" ? "0" : pixelUnitValue + "px")
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
              value={String(percentUnitValue)}
              onChange={convertUnits}
            />
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() =>
              copyUnitValue(
                percentUnitValue === "" ? "0" : percentUnitValue + "%"
              )
            }
          >
            <img src={copyIcon} alt="copy" />
          </button>
        </div>
      </form>

      <div className="base-value-declaration-and-settings-container">
        <p className="base-value-declaration">
          Conversions are made based on <span>{baseValue}px</span>
        </p>
        <div className="base-value-settings">
          <p>
            Change <span>base</span> font-size:
          </p>
          <input
            type="number"
            name="base-value"
            id="base-value-input"
            className="base-value-input"
            value={String(baseValue)}
            onChange={configureBaseValue}
          />
        </div>
      </div>
    </>
  );
}
