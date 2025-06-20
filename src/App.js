import logo from "./logo.svg";
import "./App.css";
import DrumPad from "./components/DrumPad.jsx";

function App() {
  const audios = {
    heater1: { file: "Heater-1.mp3", name: "heater1", key: "Q" },
    heater2: { file: "Heater-2.mp3", name: "heater2", key: "W" },
    heater3: { file: "Heater-3.mp3", name: "heater3", key: "E" },
    heater4: { file: "Heater-4.mp3", name: "heater4", key: "A" },
    clap: { file: "Clap.mp3", name: "clap", key: "S" },
    openHH: { file: "Cev_H2.mp3", name: "openHH", key: "D" },
    kick_n_hat: {
      file: "Kick_n_Hat.mp3",
      name: "kick_n_hat",
      key: "Z",
    },
    kick: { file: "RP4_KICK_1.mp3", name: "kick", key: "X" },
    closedHH: { file: "Dsc_Oh.mp3", name: "closedHH", key: "C" },
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <DrumPad audio={audios.kick} />
        </div>
      </div>
    </div>
  );
}

export default App;
