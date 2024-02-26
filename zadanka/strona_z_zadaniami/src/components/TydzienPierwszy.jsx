import ZadanieTemplate from "./small_components/ZadanieTemplate.jsx";
import { DaneTydzien1 } from "../../data.js";

const TydzienPierwszy = () => {
  return (
    <>
      <h1>Tydzień1: Algorytmy </h1>
      <hr />
      <ZadanieTemplate
        name={DaneTydzien1.zadanieD3.name}
        trescZadania={DaneTydzien1.zadanieD3.trescZadania}
        rozwiazanie={DaneTydzien1.zadanieD3.rozwiazanie}
        komentarz={DaneTydzien1.zadanieD3.komentarz}
        jezyk={DaneTydzien1.zadanieD3.jezyk}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={DaneTydzien1.zadanieD4.name}
        trescZadania={DaneTydzien1.zadanieD4.trescZadania}
        rozwiazanie={DaneTydzien1.zadanieD4.rozwiazanie}
        komentarz={DaneTydzien1.zadanieD4.komentarz}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={DaneTydzien1.zadanieD5.name}
        trescZadania={DaneTydzien1.zadanieD5.trescZadania}
        rozwiazanie={DaneTydzien1.zadanieD5.rozwiazanie}
        komentarz={DaneTydzien1.zadanieD5.komentarz}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={DaneTydzien1.zadanieD6.name}
        trescZadania={DaneTydzien1.zadanieD6.trescZadania}
        rozwiazanie={DaneTydzien1.zadanieD6.rozwiazanie}
        komentarz={DaneTydzien1.zadanieD6.komentarz}
      ></ZadanieTemplate>
    </>
  );
};

export default TydzienPierwszy;
