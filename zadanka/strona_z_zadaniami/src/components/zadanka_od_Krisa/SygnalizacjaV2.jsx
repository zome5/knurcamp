import { useState } from "react";
import { Kółko } from "./Kółko";

export const SygnalizacjaV2 = () => {
  const colors = ["red", "yellow", "green"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleButtonClick = () =>
    setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
  return (
    <>
      <h1>SygnalizacjaV2</h1>
      <article
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Kółko kolor={activeIndex === 0 ? colors[activeIndex] : null}></Kółko>
        <Kółko kolor={activeIndex === 1 ? colors[activeIndex] : null}></Kółko>
        <Kółko kolor={activeIndex === 2 ? colors[activeIndex] : null}></Kółko>
        <button onClick={handleButtonClick}>Change Light</button>
      </article>
    </>
  );
};
