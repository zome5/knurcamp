import { Kółko } from "./Kółko";
import { useEffect, useState } from "react";

export const Światła = () => {
  const colors = ["red", "yellow", "green"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightsInterval, setLightsInterval] = useState();
  const handlePlayButton = () => {
    if (lightsInterval === undefined) {
      setLightsInterval(
        setInterval(() => {
          console.log("run");
          setActiveIndex((prev) => (prev >= 2 ? 0 : prev + 1));
        }, 1000)
      );
    } else {
      clearInterval(lightsInterval);
      setLightsInterval();
    }
  };

  return (
    <article
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Kółko kolor={activeIndex === 0 ? colors[activeIndex] : "white"}></Kółko>
      <Kółko kolor={activeIndex === 1 ? colors[activeIndex] : "white"}></Kółko>
      <Kółko kolor={activeIndex === 2 ? colors[activeIndex] : "white"}></Kółko>
      <button
        onClick={handlePlayButton}
        style={{ fontSize: "22px", padding: "0px 45px 5px" }}
      >
        ⏯︎
      </button>
    </article>
  );
};
