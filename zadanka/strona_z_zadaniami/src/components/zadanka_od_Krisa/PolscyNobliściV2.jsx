import { nobelPrizeWinners } from "../../data/nobelPrizeWinners";

export const PolscyNobliściV2 = () => {
  const polishNobelPrizeWinners = nobelPrizeWinners.filter(
    (element) => element.nationality === "Polish"
  );
  const otherNobelPrizeWinners = nobelPrizeWinners.filter(
    (element) => element.nationality !== "Polish"
  );

  return (
    <>
      <h1>Polscy Nobliści V2</h1>
      <section>
        {polishNobelPrizeWinners.map((element, i) => {
          return (
            <div className="nobel-winner-wrapper" key={"element" + i}>
              <h2>{element.name}</h2>
              <p>
                <span className="bold">Nationality: </span>
                {element.nationality}
              </p>
              <p>
                <span className="bold">Category: </span>
                {element.category}
              </p>
              <p>
                <span className="bold">Number of achievements: </span>
                {element.achievements.length}
              </p>

              <ul>
                {element.achievements.map((achievement, i) => {
                  return <li key={`li` + i}>{achievement}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </section>
      <h1>Inni Nobliści</h1>
      <section>
        {otherNobelPrizeWinners.map((element, i) => {
          return (
            <div className="nobel-winner-wrapper" key={"element" + i}>
              <h2>{element.name}</h2>
              <p>
                <span className="bold">Nationality: </span>
                {element.nationality}
              </p>
              <p>
                <span className="bold">Category: </span>
                {element.category}
              </p>
              <p>
                <span className="bold">Number of achievements: </span>
                {element.achievements.length}
              </p>

              <ul>
                {element.achievements.map((achievement, i) => {
                  return <li key={`li` + i}>{achievement}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
};
