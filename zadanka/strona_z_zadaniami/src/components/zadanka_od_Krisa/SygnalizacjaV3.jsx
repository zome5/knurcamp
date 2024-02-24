import { useEffect, useState } from "react";

export const SygnalizacjaV3 = () => {
  const [biegaj, setBiegaj] = useState(false);
  const Kółko = (props) => {
    const [color, setColor] = useState("#fff");
    const style = {
      width: "150px",
      aspectRatio: "1/1",
      backgroundColor: `${color}`,
      borderRadius: "50%",
    };
    const nowyKolor =
      props.kolejnosc === 0
        ? "red"
        : props.kolejnosc === 1
        ? "yellow"
        : "green";

    const handleLights = async () => {
      await new Promise((resolve) =>
        setTimeout(resolve, props.kolejnosc * 1000)
      );
      setColor(nowyKolor);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setColor("#fff");
    };
    useEffect(() => {
      if (props.odtwarzanie) {
        const mujInterwał = setInterval(handleLights, 4000);

        handleLights();
        console.log("wyowlanie gowna");

        return () => {
          clearInterval(mujInterwał);
        };
      }
    }, []);
    return (
      <>
        <div style={style}></div>
      </>
    );
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
        <Kółko kolejnosc={0} odtwarzanie={biegaj}></Kółko>
        <Kółko kolejnosc={1} odtwarzanie={biegaj}></Kółko>
        <Kółko kolejnosc={2} odtwarzanie={biegaj}></Kółko>
        {biegaj && <p>bieganie</p>}
        <button
          onClick={() => {
            biegaj === false ? setBiegaj(true) : setBiegaj(false);
          }}
        >
          START / STOP
        </button>
      </article>
    </>
  );
};
