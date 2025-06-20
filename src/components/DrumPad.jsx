const DrumPad = ({ audio }) => (
  <button
    className="drum-pad"
    id={audio.name}
    onClick={() =>
      new Audio(`${process.env.PUBLIC_URL}/audios/${audio.file}`).play()
    }
  >
    {audio.key}
  </button>
);

export default DrumPad;
