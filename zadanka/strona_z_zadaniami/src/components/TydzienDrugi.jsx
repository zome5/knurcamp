import ZadanieTemplate from "./small_components/ZadanieTemplate.jsx";
import { DaneTydzien2 } from "../../data.js";
const TydzienDrugi = () => {
  return (
    <>
      <h1>Tydzień 2</h1>
      <hr />
      <ZadanieTemplate
        name={DaneTydzien2.zadanieD3.name}
        trescZadania={DaneTydzien2.zadanieD3.trescZadania}
        rozwiazanie={DaneTydzien2.zadanieD3.rozwiazanie}
        komentarz={DaneTydzien2.zadanieD3.komentarz}
        jezyk={DaneTydzien2.zadanieD3.jezyk}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={DaneTydzien2.zadanieD4D5.name}
        trescZadania={DaneTydzien2.zadanieD4D5.trescZadania}
        rozwiazanie={DaneTydzien2.zadanieD4D5.rozwiazanie}
        komentarz={DaneTydzien2.zadanieD4D5.komentarz}
        jezyk={DaneTydzien2.zadanieD4D5.jezyk}
      ></ZadanieTemplate>
      <ZadanieTemplate
        name={DaneTydzien2.zadanieD6.name}
        trescZadania={DaneTydzien2.zadanieD6.trescZadania}
        rozwiazanie={DaneTydzien2.zadanieD6.rozwiazanie}
        komentarz={DaneTydzien2.zadanieD6.komentarz}
        jezyk={DaneTydzien2.zadanieD6.jezyk}
      ></ZadanieTemplate>
    </>
  );
};

export default TydzienDrugi;
