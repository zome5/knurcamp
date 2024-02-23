import ZadanieTemplate from "./ZadanieTemplate.jsx";
import { Tydzien2 } from "../../data.js";
const ZadankaTydzienTwo = () => {
  return (
    <>
      <h1>Tydzień 2</h1>
      <hr />
      <ZadanieTemplate
        name={Tydzien2.zadanieD3.name}
        trescZadania={Tydzien2.zadanieD3.trescZadania}
        rozwiazanie={Tydzien2.zadanieD3.rozwiazanie}
        komentarz={Tydzien2.zadanieD3.komentarz}
        jezyk={Tydzien2.zadanieD3.jezyk}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={Tydzien2.zadanieD4D5.name}
        trescZadania={Tydzien2.zadanieD4D5.trescZadania}
        rozwiazanie={Tydzien2.zadanieD4D5.rozwiazanie}
        komentarz={Tydzien2.zadanieD4D5.komentarz}
        jezyk={Tydzien2.zadanieD4D5.jezyk}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={Tydzien2.zadanieD6.name}
        trescZadania={Tydzien2.zadanieD6.trescZadania}
        rozwiazanie={Tydzien2.zadanieD6.rozwiazanie}
        komentarz={Tydzien2.zadanieD6.komentarz}
        jezyk={Tydzien2.zadanieD6.jezyk}
      ></ZadanieTemplate>
    </>
  );
};

export default ZadankaTydzienTwo;
