import { useState } from "react";
import { Kółko } from "./Kółko";

export const SygnalizacjaV2 = () => {
  const [lights, setLights] = useState({
    0: "#fff",
    1: "#fff",
    2: "#fff",
    i: 0,
  });
  const handleButtonClick = () => {
    setLights((prev) => {
      const newObj = {
        0: "#fff",
        1: "#fff",
        2: "#fff",
        i: prev.i,
      };
      if (prev.i % 3 === 0) newObj[0] = "green";
      else if (prev.i % 3 === 1) newObj[1] = "yellow";
      else newObj[2] = "red";
      newObj.i++;
      return newObj;
    });
  };
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
        <Kółko kolor={lights[0]}></Kółko>
        <Kółko kolor={lights[1]}></Kółko>
        <Kółko kolor={lights[2]}></Kółko>
        <button onClick={handleButtonClick}>Change Light</button>
      </article>
    </>
  );
};
