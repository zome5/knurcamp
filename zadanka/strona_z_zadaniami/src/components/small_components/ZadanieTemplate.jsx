import { useState } from "react";
import Highlight from "react-highlight";

const ZadanieTemplate = (props) => {
  const [showTrescZadania, setShowTrescZadania] = useState(false);
  const [showRozwiazanie, setShowRozwiazanie] = useState(false);
  const [showKomentarz, setShowKomentarz] = useState(false);

  return (
    <>
      <h1>{props.name}</h1>
      <h3>Treść zadania:</h3>
      <div>
        <button
          onClick={() =>
            showTrescZadania === false
              ? setShowTrescZadania(true)
              : setShowTrescZadania(false)
          }
        >
          show
        </button>
        <p className={!showTrescZadania ? "hidden" : ""}>
          {props.trescZadania}
        </p>
      </div>
      <h3>Moje rozwiązanie: </h3>
      <button
        onClick={() =>
          showRozwiazanie === false
            ? setShowRozwiazanie(true)
            : setShowRozwiazanie(false)
        }
      >
        show
      </button>
      <div className={!showRozwiazanie ? "hidden" : ""}>
        <Highlight className={props}>{props.rozwiazanie}</Highlight>
      </div>
      <h3>Komentarz: </h3>
      <button
        onClick={() =>
          showKomentarz === false
            ? setShowKomentarz(true)
            : setShowKomentarz(false)
        }
      >
        show
      </button>
      <p className={!showKomentarz ? "hidden" : ""}>{props.komentarz}</p>
    </>
  );
};

export default ZadanieTemplate;
