import ZadanieTemplate from "./ZadanieTemplate.tsx";
import { Tydzien1 } from "../../data.js";

const Algorytymy = () => {
  return (
    <>
      <h1>Tydzień1: Algorytmy </h1>
      <hr />
      <ZadanieTemplate
        name={Tydzien1.zadanieD3.name}
        trescZadania={Tydzien1.zadanieD3.trescZadania}
        rozwiazanie={Tydzien1.zadanieD3.rozwiazanie}
        komentarz={Tydzien1.zadanieD3.komentarz}
        jezyk={Tydzien1.zadanieD3.jezyk}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={Tydzien1.zadanieD4.name}
        trescZadania={Tydzien1.zadanieD4.trescZadania}
        rozwiazanie={Tydzien1.zadanieD4.rozwiazanie}
        komentarz={Tydzien1.zadanieD4.komentarz}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={Tydzien1.zadanieD5.name}
        trescZadania={Tydzien1.zadanieD5.trescZadania}
        rozwiazanie={Tydzien1.zadanieD5.rozwiazanie}
        komentarz={Tydzien1.zadanieD5.komentarz}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={Tydzien1.zadanieD6.name}
        trescZadania={Tydzien1.zadanieD6.trescZadania}
        rozwiazanie={Tydzien1.zadanieD6.rozwiazanie}
        komentarz={Tydzien1.zadanieD6.komentarz}
      ></ZadanieTemplate>
    </>
  );
};

export default Algorytymy;
