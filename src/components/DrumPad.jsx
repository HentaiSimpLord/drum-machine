import React, { useEffect } from "react";

const DrumPad = ({ audio, setDisplay }) => {
  const playSound = () => {
    setDisplay(audio.name);
    const naudio = document.getElementById(audio.key);
    if (naudio) naudio.play();
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toUpperCase() === audio.key.toUpperCase()) {
        playSound();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [audio]);

  return (
    <button className="drum-pad" id={audio.file} onClick={playSound}>
      {audio.key}
      <audio
        className="clip"
        id={audio.key}
        src={`${process.env.PUBLIC_URL}/audios/${audio.file}`}
      />
    </button>
  );
};

export default DrumPad;
