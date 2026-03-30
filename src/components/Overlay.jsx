import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  const handleRestart = () => {
    window.location.reload();
  };
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            YASH
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">Scroll to follow my story</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Begin
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <div className="outro__content">
          <p className="outro__text">Thanks for riding through my journey.</p>
          <button className="outro__restart" onClick={handleRestart}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};
