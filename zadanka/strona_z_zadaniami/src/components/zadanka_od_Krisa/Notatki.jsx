import { useState } from "react";

export const Notatki = () => {
  const [zakupyList, setZakupyList] = useState([]);
  const [pracaList, setPracaList] = useState([]);
  const [studiaList, setStudiaList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentSection, setCurrentSection] = useState("Lista Zakupów");
  const handleNavClick = (nameOfThisElement) => {
    setCurrentSection(nameOfThisElement);
  };
  const handleNavStyles = (nameOfThisElement) => {
    if (currentSection === nameOfThisElement) {
      return {
        border: "1px solid #4191c0",
      };
    }
    return {};
  };

  const renderList = (list) => {
    return list.map((listElement, i) => (
      <p key={`${listElement}-${i}`}>{listElement}</p>
    ));
  };

  return (
    <>
      <h1>Notatki</h1>
      <div className="notatki-wrapper">
        <div className="notatki-nav">
          <h3
            onClick={() => {
              handleNavClick("Lista Zakupów");
              setInputValue("");
            }}
            style={handleNavStyles("Lista Zakupów")}
          >
            Lista Zakupów
          </h3>
          <h3
            onClick={() => {
              handleNavClick("Praca");
              setInputValue("");
            }}
            style={handleNavStyles("Praca")}
          >
            Praca
          </h3>
          <h3
            onClick={() => {
              handleNavClick("Studia");
              setInputValue("");
            }}
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
              onClick={() => {
                switch (currentSection) {
                  case "Lista Zakupów":
                    setZakupyList((prev) => [...prev, inputValue]);
                    break;
                  case "Praca":
                    setPracaList((prev) => [...prev, inputValue]);
                    break;
                  case "Studia":
                    setStudiaList((prev) => [...prev, inputValue]);
                    break;
                }
                setInputValue("");
              }}
            >
              save
            </button>
          </form>
          <section>
            {currentSection === "Lista Zakupów"
              ? renderList(zakupyList)
              : currentSection === "Praca"
              ? renderList(pracaList)
              : renderList(studiaList)}
          </section>
        </div>
      </div>
    </>
  );
};
