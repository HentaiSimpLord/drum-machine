import logo from "./logo.svg";
import "./App.scss";
import DrumPad from "./components/DrumPad.jsx";
import { useState } from "react";

function App() {
  const audios = [
    { file: "Heater-1.mp3", name: "Heater 1", key: "Q" },
    { file: "Heater-2.mp3", name: "Heater 2", key: "W" },
    { file: "Heater-3.mp3", name: "Heater 3", key: "E" },
    { file: "Heater-4_1.mp3", name: "Heater 4", key: "A" },
    { file: "Clap.mp3", name: "Clap", key: "S" },
    { file: "Cev_H2.mp3", name: "Open HH", key: "D" },
    {
      file: "Kick_n_Hat.mp3",
      name: "Kick n' Hat",
      key: "Z",
    },
    { file: "RP4_KICK_1.mp3", name: "Kick", key: "X" },
    { file: "Dsc_Oh.mp3", name: "Closed HH", key: "C" },
  ];

  const [displayText, setDisplay] = useState("");

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="drum-pad-container">
          {audios.map((audio) => (
            <DrumPad audio={audio} key={audio.key} setDisplay={setDisplay} />
          ))}
        </div>
        <div id="display">{displayText}</div>
      </div>
    </div>
  );
}

export default App;
