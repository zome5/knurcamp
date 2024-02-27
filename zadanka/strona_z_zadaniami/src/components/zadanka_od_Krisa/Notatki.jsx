// import { NotatkiForm } from "../small_components/NotatkiForm";
import { useState } from "react";

export const Notatki = () => {
  const [zakupyList, setZakupyList] = useState([]);
  const [pracaList, setPracaList] = useState([]);
  const [studiaList, setStudiaList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentSection, setCurrentSection] = useState(zakupyList);
  const [currentSetSection, setCurrentSetSection] = useState(setZakupyList);
  const handleNavStyles = (nameOfThisElement) => {
    if (currentSection === nameOfThisElement) {
      return {
        border: "1px solid #4191c0",
      };
    }
  };
  const handleNavClick = (state, setState) => {
    setCurrentSection(state);
    setCurrentSetSection(setState);
  };

  return (
    <>
      <h1>Notatki</h1>
      <div className="notatki-wrapper">
        <div className="notatki-nav">
          <h3
            onClick={() => handleNavClick(zakupyList, setZakupyList)}
            style={handleNavStyles("Lista Zakupów")}
          >
            Lista Zakupów
          </h3>
          <h3
            onClick={() => handleNavClick(pracaList, setPracaList)}
            style={handleNavStyles("Praca")}
          >
            Praca
          </h3>
          <h3
            onClick={() => handleNavClick(studiaList, setStudiaList)}
            style={handleNavStyles("Studia")}
          >
            Studia
          </h3>
        </div>
        <div className="notatki-inner-wrapper">
          <form action="submit">
            <input
              type="text"
              placeholder="napisz coś..."
              value={inputValue || " "}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="button"
              onClick={(e) => {
                currentSetSection((prev) => {
                  return [...prev, inputValue];
                });
                setInputValue("");
              }}
            >
              save
            </button>
          </form>
          <section>
            {currentSection.map((listElement, i) => (
              <p key={`${listElement}-${i}`}>{listElement}</p>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
