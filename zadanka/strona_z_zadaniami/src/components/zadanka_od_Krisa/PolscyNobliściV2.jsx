import { otherNobelPriceWinners } from "../../data/nobelPriceWinners";

export const PolscyNobliściV2 = () => {
  const polishNobelPriceWinners = nobelPrizeWinners.filter(
    (element) => element.nationality === "Polish"
  );
  const otherNobelPriceWinners = nobelPrizeWinners.filter(
    (element) => element.nationality !== "Polish"
  );

  return (
    <>
      <h1>Polscy Nobliści V2</h1>
      <section>
        {polishNobelPriceWinners.map((element) => {
          return (
            <div className="nobel-winner-wrapper">
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
              <p>
                <ul>
                  {element.achievements.map((achievement) => {
                    return <li>{achievement}</li>;
                  })}
                </ul>
              </p>
            </div>
          );
        })}
      </section>
      <h1>Inni Nobliści</h1>
      <section>
        {otherNobelPriceWinners.map((element) => {
          return (
            <div className="nobel-winner-wrapper">
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
              <p>
                <ul>
                  {element.achievements.map((achievement) => {
                    return <li>{achievement}</li>;
                  })}
                </ul>
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};
